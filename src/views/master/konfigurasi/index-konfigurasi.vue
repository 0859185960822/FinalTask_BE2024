<script>
import Layout from "@/layouts/main";
import PageHeader from "@/components/page-header";
import Swal from "sweetalert2";
import $ from "jquery";
import axios from "axios";

// Pinia State Management
import { useLayoutStore, useNotificationStore } from '@/state/pinia'
const layouts = useLayoutStore()
const notification = useNotificationStore()

/**
 * Form-element component
 */
export default {
    components: { Layout, PageHeader },
    data() {
        return {
            listConfigurasi: [],
            valueConfigurasi: [],
            
            statusLogoFullDark: false,
            logoFullDark: process.env.VUE_APP_BACKEND_URL + layouts.configApps.LOGO_FULL_DARK,
            updateLogoFullDark: null,

            statusLogoFullLight: false,
            logoFullLight: process.env.VUE_APP_BACKEND_URL + layouts.configApps.LOGO_FULL_LIGHT,
            updateLogoFullLight: null,
            
            satatusLoginBackground: false,
            loginBackground: process.env.VUE_APP_BACKEND_URL + layouts.configApps.LOGIN_BACKGROUND,
            updateLoginBackground: null,
        }
    },
    async mounted(){
        await this.getConfigArray();
    },
    methods: {
        async getConfigArray(){
            Swal.fire(notification.swalLoading)
            await axios.get(process.env.VUE_APP_BACKEND_URL_API + 'config/array-all', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
                }
            }).then((res) => {
                let dataResponse = res.data.data
                this.listConfigurasi = dataResponse;
                this.valueConfigurasi = dataResponse;
                Swal.close();
            }).catch((error) => {
                notification.setSwalAlert("error", "Oops...", error.response.data.meta.message);
                Swal.fire(notification.swalAlert);
            });
        },
        async updateConfig(){
            let self = this;
            Swal.fire(notification.swalLoading);
            let config_update = {
                method: "put",
                url: process.env.VUE_APP_BACKEND_URL_API + "config",
                data: {
                    valueConfigurasi: JSON.stringify(this.valueConfigurasi),
                    statusLogoFullDark: this.statusLogoFullDark,
                    statusLogoFullLight: this.statusLogoFullLight,
                    statusLoginBackground: this.satatusLoginBackground,
                    logoFullDark: this.updateLogoFullDark,
                    logoFullLight: this.updateLogoFullLight,
                    loginBackground: this.updateLoginBackground
                },
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('accessToken'),
                },
            };

            await axios(config_update).then(function (response) {
                let dataReponse = response.data.data;
                if(dataReponse == 'success'){
                    notification.setSwalAlert("success", "Berhasil", "Data Berhasil di perbarui.");
                    Swal.fire(notification.swalAlert);
                    window.setTimeout(async () => {
                        await self.reloadConfigApps();
                    }, 2000)
                    
                } else {
                    notification.setSwalAlert("error", "Oops...", "Maaf terjadi kesalahan saat update data.");
                    Swal.fire(notification.swalAlert);
                }
            }).catch((error) => {
                notification.setSwalAlert("error", "Oops...", error.response.data.data.error);
                Swal.fire(notification.swalAlert);
            });
        },
        async reloadConfigApps(){
            Swal.fire(notification.swalLoading);
            await axios.get(process.env.VUE_APP_BACKEND_URL_API + "auth/konfig-login").then((res)=>{
                this.konfig_login = res.data.data;
                layouts.changeConfigApps(res.data.data);
                Swal.close();
                window.location.reload();
            });
        },
        renameLabel(label){
            return label.replaceAll("_", " ");
        },
        inputFilePhoto(typeUpload) {
            let self = this;
            let typeId = "#" + typeUpload;
            let dataType = $(typeId).data('type');
            if ($(typeId)[0].files[0]) {
                if ($(typeId)[0].files[0].size < 2242880) {
                    $("#upload_loading_" + dataType).html(
                        '<span class="badge bg-warning p-1"><i class="fa fa-refresh fa-spin"></i> Loading...</span>'
                    );

                    // var url_res = process.env.VUE_APP_BACKEND_URL;
                    var FormData = require("form-data");
                    var dataUpload = new FormData();
                    dataUpload.append("UPLOADED_FILE_REFERENSI", $(typeId)[0].files[0]);

                    var config = {
                        method: "post",
                        url: process.env.VUE_APP_BACKEND_URL_API + "config/referensi-upload",
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("accessToken"),
                        },
                        data: dataUpload,
                    };
                    axios(config).then(function (response) {
                        if(dataType == 'logo_full_dark'){
                            self.statusLogoFullDark = true;
                            self.updateLogoFullDark = response.data.data;
                            self.logoFullDark = process.env.VUE_APP_BACKEND_URL + response.data.data;
                        }else if(dataType == 'logo_full_light'){
                            self.statusLogoFullLight = true;
                            self.updateLogoFullLight = response.data.data;
                            self.logoFullLight = process.env.VUE_APP_BACKEND_URL + response.data.data;
                        }else if(dataType == 'login_background'){
                            self.satatusLoginBackground = true;
                            self.updateLoginBackground = response.data.data;
                            self.loginBackground = process.env.VUE_APP_BACKEND_URL + response.data.data;
                        }
                        $("#upload_loading_" + dataType).html(
                            '<span class="badge bg-success p-1"><i class="fas fa-check"></i> Berhasil Upload</span>'
                        );
                    }).catch(function (error){
                        notification.setSwalAlertForm('error', 'Form Error', JSON.stringify(error.response.data.data.error))
                        Swal.fire(notification.swalAlertForm);
                        $("#upload_loading_" + dataType).html(
                            '<span class="badge bg-danger p-1"><i class="fas fa-times"></i> Error Upload File</span>'
                        );
                    });
                }else{
                    $("#upload_loading_" + dataType).html(
                        '<span class="badge bg-danger p-1"><i class="fas fa-times"></i> Max Ukuran File 2Mb.</span>'
                    );
                }
            }
        }
    }
};
</script>

<template>
    <Layout>
        <PageHeader title="Konfigurasi Aplikasi" pageTitle="Master" />
        <BRow>
            <BCol cols="12">
                <BCard no-body>
                    <BCardBody>
                        <b-form class="p-2" @submit.prevent="updateConfig()">
                            <BRow class="mb-3">
                                <BCol cols="6">
                                    <BCardTitle>Semua Data Konfigurasi</BCardTitle>
                                </BCol>
                                <BCol cols="6">
                                    <div class="d-flex flex-wrap justify-content-end gap-2">
                                        <button type="submit" class="btn btn-success btn-sm"><i class="fas fa-save"></i> Simpan</button>
                                    </div>
                                </BCol>
                            </BRow>
                            <BRow>
                                <div v-for="(dataConfig, index) in listConfigurasi" :key="index">
                                    <BCol cols="12" v-if="dataConfig.slug != 'ONE_TIME_LOGIN' && dataConfig.slug != 'CAPTCHA' && dataConfig.slug != 'LOGO_SMALL' && dataConfig.slug != 'LOGO_FULL_DARK' && dataConfig.slug != 'LOGO_FULL_LIGHT' && dataConfig.slug != 'LOGIN_BACKGROUND'">
                                        <BFormGroup class="mb-3" :label="renameLabel(dataConfig.slug)" :label-for="`formrow-${index}`">
                                            <BFormInput 
                                                :id="`formrow-${index}`" 
                                                type="text" :placeholder="`Masukkan ${renameLabel(dataConfig.slug)}...`"
                                                v-model="valueConfigurasi[index].value"
                                                required="true"
                                            ></BFormInput>
                                        </BFormGroup>
                                    </BCol>
                                    <BCol cols="12" v-if="dataConfig.slug == 'ONE_TIME_LOGIN'">
                                        <BFormGroup class="mb-3" :label="renameLabel(dataConfig.slug)" :label-for="`formrow-${index}`">
                                            <select class="form-select" :id="`formrow-${index}`" v-model="valueConfigurasi[index].value">
                                                <option value="1">Ya</option>
                                                <option value="0">Tidak</option>
                                            </select>
                                        </BFormGroup>
                                    </BCol>
                                    <BCol cols="12" v-if="dataConfig.slug == 'CAPTCHA'">
                                        <BFormGroup class="mb-3" :label="renameLabel(dataConfig.slug)" :label-for="`formrow-${index}`">
                                            <select class="form-select" :id="`formrow-${index}`" v-model="valueConfigurasi[index].value">
                                                <option value="1">Ya</option>
                                                <option value="0">Tidak</option>
                                            </select>
                                        </BFormGroup>
                                    </BCol>
                                </div>
                            </BRow>
                            <BRow>
                                <BCol cols="6">
                                    <BFormGroup class="mb-3" label="LOGO FULL DARK" label-for="logo_full_dark">
                                        <input type="file" class="form-control" data-type="logo_full_dark" id="logo_full_dark" v-on:change="inputFilePhoto('logo_full_dark')" />
                                        <div class="respond-input-file float-left" id="upload_loading_logo_full_dark"></div>
                                        <small class="float-right" style="color: red">*) Max File 2 MB</small>
                                    </BFormGroup>
                                    <div class="mb-3 d-flex justify-content-center">
                                        <img class="img-thumbnail" alt="200x200" width="200" :src="logoFullDark" data-holder-rendered="true" />
                                    </div>
                                </BCol>
                                <BCol cols="6">
                                    <BFormGroup class="mb-3" label="LOGO FULL LIGHT" label-for="logo_full_light">
                                        <input type="file" class="form-control" data-type="logo_full_light" id="logo_full_light" v-on:change="inputFilePhoto('logo_full_light')" />
                                        <div class="respond-input-file float-left" id="upload_loading_logo_full_light"></div>
                                        <small class="float-right" style="color: red">*) Max File 2 MB</small>
                                    </BFormGroup>
                                    <div class="mb-3 d-flex justify-content-center">
                                        <img class="img-thumbnail" alt="200x200" width="200" :src="logoFullLight" data-holder-rendered="true" />
                                    </div>
                                </BCol>
                                <BCol cols="12">
                                    <BFormGroup class="mb-3" label="LOGIN BACKGROUND" label-for="login_background">
                                        <input type="file" class="form-control" data-type="login_background" id="login_background" v-on:change="inputFilePhoto('login_background')" />
                                        <div class="respond-input-file float-left" id="upload_loading_login_background"></div>
                                        <small class="float-right" style="color: red">*) Max File 2 MB</small>
                                    </BFormGroup>
                                    <div class="mb-3 d-flex justify-content-center">
                                        <img class="img-thumbnail" alt="512x512" width="512" :src="loginBackground" data-holder-rendered="true" />
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