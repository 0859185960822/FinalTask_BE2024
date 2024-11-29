<script>
import Swal from "sweetalert2";
import axios from "axios";

// Pinia State Management
import { useNotificationStore } from '@/state/pinia'
const notification = useNotificationStore()

export default {
    name: 'CreateMenuMaster',
    data() {
        return {
            menuTipe: "",

            // property form tipe label
            namaLabel: null,
            slugLabel: null,

            // property form tipe menu
            iconMenu: null,
            namaMenu: null,
            slugMenu: null,
            linkMenu: null,

            masterLabel: false,
            masterMenu: false
        }
    },
    emits: ['closeFormRefreshTable'],
    methods:{
        formType(){
            if(this.menuTipe == 'LABEL'){
                this.masterLabel = true;
                this.masterMenu = false;
            }else{
                this.masterLabel = false;
                this.masterMenu = true;
            }
        },
        StoreData(){
            Swal.fire(notification.swalLoading)
            let payload  = null;
            if(this.menuTipe == 'LABEL'){
                payload =  {
                    tipe: this.menuTipe,
                    nama_label: this.namaLabel,
                    slug_label: this.slugLabel,
                }
            }else{
                payload =  {
                    tipe: this.menuTipe,
                    nama_menu: this.namaMenu,
                    slug_menu: this.slugMenu,
                    link_menu: this.linkMenu,
                    icon_menu: this.iconMenu
                }
            }

            let config_store = {
                method: "post",
                url: process.env.VUE_APP_BACKEND_URL_API + 'menu',
                data: payload,
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('accessToken')
                }
            }

            axios(config_store).then((response) => {
                let dataReponse = response.data.meta.status;
                if(dataReponse == 'success') {
                    Swal.fire(notification.swalAlertDefaultInputSuccess);
                    this.$emit('closeFormRefreshTable', 'add');
                } else {
                    Swal.fire(notification.swalAlertDefaultInputError);
                }
            }).catch((error) => {
                notification.setSwalAlertForm("error", "Oops...", JSON.stringify(error.response.data.data.error));
                Swal.fire(notification.swalAlertForm);
            });
        }
    }
}
</script>
<template>
    <b-form class="p-0" @submit.prevent="StoreData">
        <div class="row">
            <div class="col-12">
                <BFormGroup class="mb-3" label="Tipe" label-for="tipe">
                    <select class="form-select" id="tipe" v-model="menuTipe" v-on:change="formType()">
                        <option value="">--- Pilih ---</option>
                        <option value="LABEL">LABEL</option>
                        <option value="MENU">MENU</option>
                    </select>
                </BFormGroup>
            </div>
            <div class="col-12" v-show="masterLabel">
                <div class="row">
                    <div class="col-6">
                        <BFormGroup label="Nama Label" label-for="nama_label">
                            <BFormInput 
                                id="nama_label" 
                                type="text" 
                                placeholder="Masukkan Nama Label..."
                                v-model="namaLabel"
                            ></BFormInput>
                        </BFormGroup>
                    </div>
                    <div class="col-6">
                        <BFormGroup label="Slug Label" label-for="slug_label">
                            <BFormInput 
                                id="slug_label" 
                                type="text" 
                                placeholder="Masukkan Slug Label..."
                                v-model="slugLabel"
                            ></BFormInput>
                        </BFormGroup>
                    </div>
                </div>
            </div>
            <div class="col-12" v-show="masterMenu">
                <div class="row">
                    <div class="col-4">
                        <BFormGroup class="mb-3" label="Icon menu" label-for="icon_menu">
                            <BFormInput 
                                id="icon_menu" 
                                type="text" 
                                placeholder="Masukkan Icon Menu..."
                                v-model="iconMenu"
                            ></BFormInput>
                        </BFormGroup>
                    </div>
                    <div class="col-4">
                        <BFormGroup class="mb-3" label="Nama Menu" label-for="nama_menu">
                            <BFormInput 
                                id="nama_menu" 
                                type="text" 
                                placeholder="Masukkan Nama Menu..."
                                v-model="namaMenu"
                            ></BFormInput>
                        </BFormGroup>
                    </div>
                    <div class="col-4">
                        <BFormGroup class="mb-3" label="Slug Menu" label-for="slug_menu">
                            <BFormInput 
                                id="slug_menu" 
                                type="text" 
                                placeholder="Masukkan Slug Menu..."
                                v-model="slugMenu"
                            ></BFormInput>
                        </BFormGroup>
                    </div>
                    <div class="col-12">
                        <BFormGroup label="Routes Name Menu" label-for="link_menu">
                            <BFormInput 
                                id="link_menu" 
                                type="text" 
                                placeholder="Masukkan Routes Name Menu..."
                                v-model="linkMenu"
                            ></BFormInput>
                        </BFormGroup>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <hr/>
                <div class="warning-disclaimer">
                    <div class="alert alert-warning" role="alert">
                        <h4 class="alert-heading">Disclaimer!!!</h4>
                        <ul>
                            <li>Untuk urutan menu mohon klik button Ordering Menu.</li>
                            <li><b>Slug Label</b> dan <b>Slug Menu</b> harus unik tidak boleh sama dengan menu lain.</li>
                            <li><b>Slug Label</b> dan <b>Slug Menu</b> mohon jangan ada karakter spasi, jika ada spasi ganti dengan karakter underscore (_).</li>
                            <li><b>Slug Label</b> dan <b>Slug Menu</b> wajib diisi untuk middleware validasi hak akses role.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <hr/>
                <div class="d-flex flex-wrap justify-content-end gap-2">
                    <button type="reset" class="btn btn-danger waves-effect waves-light btn-reset">
                        <i class="bx bx-revision font-size-16 align-middle me-1"></i> Reset
                    </button>
                    <button type="submit" class="btn btn-primary waves-effect waves-light btn-save">
                        <i class="bx bx-save font-size-16 align-middle me-1"></i> Simpan
                    </button>
                </div>
            </div>
        </div>
    </b-form>
</template>