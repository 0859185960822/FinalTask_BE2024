<script>
import Layout from "@/layouts/main";
import PageHeader from "@/components/page-header";
import nestedDraggable from "@/components/common/nested-drag";

import Swal from "sweetalert2";
import axios from "axios";

// Pinia State Management
import { useNotificationStore } from '@/state/pinia'
const notification = useNotificationStore()

export default {
    components: { Layout, PageHeader, nestedDraggable },
    data() {
        return {
            listMenu: []
        }
    },
    async mounted(){
        await this.getOrderingMenu();
    },
    methods: {
        async getOrderingMenu(){
            Swal.fire(notification.swalLoading)
            let config = {
                method: 'get',
                url: process.env.VUE_APP_BACKEND_URL_API + 'menu/order',
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('accessToken'),
                },
            }

            await axios(config).then((response) => {
                this.listMenu = response.data.data;
                Swal.close();
            }).catch((error) => {
                notification.setSwalAlert("error", "Oops...", error.response.data.meta.message);
                Swal.fire(notification.swalAlert);
            });
        },
        updateOrderingMenu(){
            Swal.fire(notification.swalLoading)
            let config = {
                method: 'put',
                url: process.env.VUE_APP_BACKEND_URL_API + 'menu/order',
                data: {
                    menu: JSON.stringify(this.listMenu)
                },
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('accessToken'),
                },
            }

            axios(config).then((response) => {
                let dataReponse = response.data.meta.status;
                if(dataReponse == 'success') {
                    Swal.fire(notification.swalAlertDefaultUpdateSuccess);
                    window.setTimeout(() => {
                        window.location.reload();
                    }, 2000)
                } else {
                    Swal.fire(notification.swalAlertDefaultUpdateError);
                }
            }).catch((error) => {
                notification.setSwalAlertForm("error", "Oops...", JSON.stringify(error.response.data.data.error));
                Swal.fire(notification.swalAlertForm);
            });
        },
    }
};
</script>
<template>
    <Layout>
        <PageHeader title="Ordering Menu Master" pageTitle="Menu Master" />
        <BRow>
            <BCol cols="12">
                <BCard no-body>
                    <BCardBody>
                        <b-form class="p-2" @submit.prevent="updateOrderingMenu()">
                            <BRow class="mb-3">
                                <BCol cols="12">
                                    <BCardTitle>Semua Urutan Menu Master</BCardTitle>
                                    <hr/>
                                </BCol>
                                <BCol cols="12">
                                    <div class="p-2">
                                        <nested-draggable
                                            :tasks="listMenu"
                                        />
                                    </div>
                                </BCol>
                                <BCol cols="12">
                                    <hr>
                                    <div class="d-flex flex-wrap justify-content-end gap-2">
                                        <router-link :to="{ name: 'menu-master' }" class="btn btn-warning btn-sm">
                                            <i class="bx bx bx-left-arrow-alt font-size-16 align-middle me-1"></i> Kembali
                                        </router-link>
                                        <button type="submit" class="btn btn-primary btn-sm">
                                            <i class="bx bx-save font-size-16 align-middle me-1"></i> Simpan
                                        </button>
                                    </div>
                                </BCol>
                            </BRow>
                        </b-form>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>