<script>
import Layout from "@/layouts/main";
import PageHeader from "@/components/page-header";
import TableHeadPagination from "@/components/common/table-head-pagination"
import CreateMenuMaster from "@/views/master/menu-master/create-menu-master"
import UpdateMenuMaster from "@/views/master/menu-master/update-menu-master"

import axios from 'axios';
import Swal from "sweetalert2";

// Pinia State Management
import { useNotificationStore } from '@/state/pinia'
const notification = useNotificationStore()

export default {
    components: { Layout, PageHeader, TableHeadPagination, CreateMenuMaster, UpdateMenuMaster },
    data() {
        
        const columnData = [
            { width: "50px", label: "No", name: "-" },
            { width: "auto", label: "Tipe", name: "menu_master_type" },
            { width: "auto", label: "Nama", name: "menu_master_name" },
            { width: "auto", label: "Slug", name: "menu_master_slug" },
            { width: "auto", label: "Icon", name: "menu_master_icon" },
            { width: "auto", label: "Link", name: "menu_master_link" },
            { width: "auto", label: "Urutan", name: "menu_master_urutan" },
            { width: "auto", label: "Parent", name: "menu_master_parent" },
            { width: "auto", label: "Status", name: "-" },
            { width: "auto", label: "Aksi", name: "-" },
        ]
        const sortOrderData = [];
        columnData.forEach((column) => {
            sortOrderData[column.name] = 1;
        });

        return {
            tableHeadPagination: {
                // sorting, limit dan search
                Column: columnData,
                SortKey: null,
                SortOrder: sortOrderData,
                SortOrderDir: null,
                LimitOrder: 10,
                SearchData: null,

                // pagination
                PageFrom: null,
                PageTo: null,
                PageTotal: null,
                CurrentPage: null,
                PaginationLinks: null,
            },
            tableData: {
                // init table data
                UrlDataTable: process.env.VUE_APP_BACKEND_URL_API + 'menu',
                DrawTable: 0,
                LoadingTable: true,
                DataTable:[],

                // filter data
                filter_status: "ENABLE",
                filter_tipe: ""
            },
            modalFormShowAdd: false,
            modalFormShowEdit: false,
            editedData: null
        }
    },
    async mounted(){
        await this.getTableData();
    },
    emits: ['dataTableAction', 'closeFormRefreshTable'],
    methods: {
        async getTableData(){
            this.tableData.DrawTable++;
            this.tableData.LoadingTable = true;
            let config = {
                method: "get",
                url: this.tableData.UrlDataTable,
                params: {
                    draw: this.tableData.DrawTable,
                    per_page: this.tableHeadPagination.LimitOrder,
                    search: this.tableHeadPagination.SearchData,
                    sort_field: this.tableHeadPagination.SortKey,
                    sort_order: this.tableHeadPagination.SortOrderDir,
                    status: this.tableData.filter_status,
                    tipe: this.tableData.filter_tipe
                },
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + localStorage.getItem('accessToken'),
                },
            }

            await axios(config).then((response) => {
                const responseData = response.data.data;
                this.tableData.LoadingTable = false;
                this.tableData.DataTable = responseData.data;
                this.tableHeadPagination.PageFrom = responseData.from
                this.tableHeadPagination.PageTo = responseData.to
                this.tableHeadPagination.PageTotal = responseData.total
                this.tableHeadPagination.CurrentPage = responseData.current_page;
                this.tableHeadPagination.PaginationLinks = responseData.links;
            }).catch((error) => {
                notification.setSwalAlert("error", "Oops...", error.response.data.meta.message);
                Swal.fire(notification.swalAlert);
            });
        },
        dataTableAction(tableData){
            let keySort = tableData.SortKey;

            // sorting data
            this.tableHeadPagination.SortKey = keySort;
            this.tableHeadPagination.SortOrder[keySort] = this.tableHeadPagination.SortOrder[keySort] * -1;
            this.tableHeadPagination.SortOrderDir = this.tableHeadPagination.SortOrder[keySort] === 1 ? "asc" : "desc";

            // limit dan search data
            this.tableHeadPagination.LimitOrder = tableData.LimitOrder;
            this.tableHeadPagination.SearchData = tableData.SearchData;
            this.tableData.UrlDataTable = tableData.LinkPagination ? tableData.LinkPagination : process.env.VUE_APP_BACKEND_URL_API + 'menu';
            this.getTableData();
        },
        showFormModal(type, data){
            if(type == 'add'){
                this.$nextTick(() => {
                    this.modalFormShowAdd = true;
                });
            }else{
                this.editedData = data
                this.$nextTick(() => {
                    this.modalFormShowEdit = true;
                });
            }
        },
        async closeFormRefreshTable(type){
            if(type == 'add') {
                this.modalFormShowAdd = false;
            } else {
                this.modalFormShowEdit = false;
            }
            await this.getTableData();
        },
        changeStatus(status, data){
            notification.setSwalConfirmationAttr('Perhatian', 'Anda yakin ingin ubah status data tersebut?');
            Swal.fire(notification.swalConfirmationAttr).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(notification.swalLoading)

                    let config_status = {
                        method: "put",
                        url: process.env.VUE_APP_BACKEND_URL_API + 'menu/' + data?.menu_master_id + '/' + status,
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem('accessToken')
                        }
                    }

                    axios(config_status).then((response) => {
                        let dataReponse = response.data.meta.status;
                        if(dataReponse == 'success') {
                            Swal.fire(notification.swalAlertDefaultUpdateSuccess);
                            this.getTableData();
                        } else {
                            Swal.fire(notification.swalAlertDefaultUpdateError);
                        }
                    }).catch((error) => {
                        notification.setSwalAlertForm("error", "Oops...", JSON.stringify(error.response.data.data.error));
                        Swal.fire(notification.swalAlertForm);
                    });
                } else if (result.isDenied) {
                    Swal.close();
                }
            });
        },
        deleteData(data){
            notification.setSwalConfirmationAttr('Perhatian!!!', 'Anda yakin ingin menghapus data tersebut?');
            Swal.fire(notification.swalConfirmationAttr).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(notification.swalLoading)

                    let config_delete = {
                        method: "delete",
                        url: process.env.VUE_APP_BACKEND_URL_API + 'menu/' + data?.menu_master_id,
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem('accessToken')
                        }
                    }

                    axios(config_delete).then((response) => {
                        let dataReponse = response.data.meta.status;
                        if(dataReponse == 'success') {
                            Swal.fire(notification.swalAlertDefaultDeleteSuccess);
                            this.getTableData();
                        } else {
                            Swal.fire(notification.swalAlertDefaultDeleteError);
                        }
                    }).catch((error) => {
                        notification.setSwalAlertForm("error", "Oops...", JSON.stringify(error.response.data.data.error));
                        Swal.fire(notification.swalAlertForm);
                    });
                } else if (result.isDenied) {
                    Swal.close();
                }
            });
        }
    }
}
</script>

<template>
    <Layout>
        <PageHeader title="Menu Master" pageTitle="Master" />
        <BRow>
            <BCol cols="12">
                <BCard no-body>
                    <BCardBody class="p-4">
                        <div class="row">
                            <div class="col-12">
                                <BCardTitle>Filter Data Menu Master</BCardTitle>
                                <hr/>
                            </div>
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-3">
                                        <BFormGroup class="mb-3" label="Status" label-for="filter-status">
                                            <select class="form-select" id="filter-status" v-model="tableData.filter_status" v-on:change="getTableData()">
                                                <option value="ENABLE">ENABLE</option>
                                                <option value="DISABLE">DISABLE</option>
                                            </select>
                                        </BFormGroup>
                                    </div>
                                    <div class="col-3">
                                        <BFormGroup class="mb-3" label="Tipe" label-for="filter-tipe">
                                            <select class="form-select" id="filter-tipe" v-model="tableData.filter_tipe" v-on:change="getTableData()">
                                                <option value="">--- Pilih ---</option>
                                                <option value="LABEL">LABEL</option>
                                                <option value="MENU">MENU</option>
                                            </select>
                                        </BFormGroup>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol cols="12">
                <BCard no-body>
                    <BCardBody class="p-4">
                        <BRow>
                            <BCol cols="6">
                                <BCardTitle>Semua Data Menu Master</BCardTitle>
                            </BCol>
                            <BCol cols="6">
                                <div class="d-flex flex-wrap gap-2 justify-content-end">
                                    <router-link :to="{ name: 'ordering-menu-master' }" class="btn btn-primary btn-sm">
                                        <i class="bx bx-list-check font-size-16 align-middle me-1"></i> Ordering Menu
                                    </router-link>
                                    <button type="button" class="btn btn-success btn-sm" v-on:click="showFormModal('add', null)">
                                        <i class="bx bx-plus font-size-16 align-middle me-1"></i> Tambah
                                    </button>
                                </div>
                            </BCol>
                        </BRow>
                        <TableHeadPagination
                        :TableHeadPagination="tableHeadPagination"
                        @dataTableAction="dataTableAction"
                        >
                            <tbody>
                                <tr v-if="tableData.LoadingTable">
                                    <td class="text-center" :colspan="tableHeadPagination.Column.length">
                                        <i class="fas fa-spinner fa-spin"></i> Loading...
                                    </td>
                                </tr>
                                <tr v-else-if="tableData.DataTable == ''">
                                    <td class="text-center" :colspan="tableHeadPagination.Column.length">Data Tidak Tersedia</td>
                                </tr>
                                <tr
                                    v-else
                                    v-for="(data, index) in tableData.DataTable"
                                    :key="index"
                                >
                                    <td class="text-center">
                                        <div v-if="index + 1 == 10">
                                            {{ tableHeadPagination.CurrentPage }}0.
                                        </div>
                                        <div v-else>
                                            {{ tableHeadPagination.CurrentPage - 1 != 0 ? tableHeadPagination.CurrentPage - 1 : "" }}
                                            {{ index + 1 }}.
                                        </div>
                                    </td>
                                    <td class="text-center">{{ data.menu_master_type }}</td>
                                    <td>{{ data.menu_master_name }}</td>
                                    <td>{{ data.menu_master_slug }}</td>
                                    <td>{{ data.menu_master_icon == null ? '-' : data.menu_master_icon }}</td>
                                    <td>{{ data.menu_master_link == null ? '-' : data.menu_master_link }}</td>
                                    <td class="text-center">{{ data.menu_master_urutan }}</td>
                                    <td class="text-center">{{ data.menu_master_parent }}</td>
                                    <td class="text-center">
                                        <div v-if="data.status == 'ENABLE'">
                                            <span class="badge badge-pill badge-soft-success font-size-12">ENABLE</span>
                                        </div>
                                        <div v-else>
                                            <span class="badge badge-pill badge-soft-danger font-size-12">DISABLE</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div v-if="data.status == 'ENABLE'">
                                            <div class="d-flex flex-wrap justify-content-center gap-2">
                                                <button type="button" class="btn btn-info btn-sm" v-on:click="showFormModal('edit', data)">
                                                    <i class="bx bx-edit font-size-16 align-middle me-1"></i> Edit
                                                </button>
                                                <button type="button" class="btn btn-warning btn-sm" v-on:click="changeStatus('DISABLE', data)">
                                                    <i class="bx bxs-error font-size-16 align-middle me-1"></i> Disable
                                                </button>
                                            </div>
                                        </div>
                                        <div v-else>
                                            <div class="d-flex flex-wrap justify-content-center gap-2">
                                                <button type="button" class="btn btn-success btn-sm" v-on:click="changeStatus('ENABLE', data)">
                                                    <i class="bx bx-check-double font-size-16 align-middle me-1"></i> Enable
                                                </button>
                                                <button type="button" class="btn btn-danger btn-sm" v-on:click="deleteData(data)">
                                                    <i class="bx bx-trash-alt font-size-16 align-middle me-1"></i> Hapus
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </TableHeadPagination>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>

    <!-- Modal Tambah Data -->
    <BModal v-model="modalFormShowAdd" id="modal-add" size="lg" title="Tambah Menu" title-class="font-18" hide-footer>
        <CreateMenuMaster v-if="modalFormShowAdd" @closeFormRefreshTable="closeFormRefreshTable"></CreateMenuMaster>
    </BModal>

    <!-- Modal Edit Data -->
    <BModal v-model="modalFormShowEdit" id="modal-edit" size="lg" title="Edit Menu" title-class="font-18" hide-footer>
        <UpdateMenuMaster v-if="modalFormShowEdit" :dataEdit="editedData" @closeFormRefreshTable="closeFormRefreshTable"></UpdateMenuMaster>
    </BModal>
</template>