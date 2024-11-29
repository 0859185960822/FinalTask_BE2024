<script>
import Layout from "@/layouts/main";
import PageHeader from "@/components/page-header";
import { avatar9 } from "@/assets/images/users/data"

import Swal from "sweetalert2";
import axios from "axios";
import $ from "jquery";
import moment from "moment";

// pinia stateful management
import { useAuthStore, useNotificationStore } from '@/state/pinia'
const auth = useAuthStore()
const notification = useNotificationStore()

export default {
    components: { Layout, PageHeader },
    data() {
        const userRole = []
        const userRoleId = []
        const userRoleData = auth.userRole;
        userRoleData.forEach((dataRole)=>{
            userRole.push(dataRole.role.role_name);
            userRoleId.push(dataRole.role_id)
        })

        return {
            avatar9,
            url_apps: process.env.VUE_APP_BACKEND_URL,
            userData: auth.userData,
            userRoleText: userRole.join(", "),

            modalFormShowEdit: false,

            name: auth.userData.name,
            username: auth.userData.username,
            username_now: auth.userData.username,
            password: null,
            password_konfirm: null,
            path_photo: null,
            role: userRoleId
        }
    },
    async mounted(){},
    methods: {
        fullDateTimeFormat(datetime) {
            return moment(datetime).format("YYYY-MM-DD HH:mm");
        },
        inputFilePhoto(){
            let self = this;
            if ($("#formPhoto")[0].files[0]) {
                if ($("#formPhoto")[0].files[0].size < 2242880) {
                    $("#uploadLoading").html(
                        '<span class="badge bg-warning p-1"><i class="bx bx-loader-alt bx-spin"></i> Loading...</span>'
                    );
                    var urlres = process.env.VUE_APP_BACKEND_URL;
                    var FormData = require("form-data");
                    var data = new FormData();
                    data.append("UPLOADED_FILE_REFERENSI", $("#formPhoto")[0].files[0]);
                    var config = {
                        method: "post",
                        url: process.env.VUE_APP_BACKEND_URL_API + "config/referensi-upload",
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem('accessToken'),
                        },
                        data: data,
                    };
                    axios(config).then(function (response) {
                        var path_file = response.data.data;
                        urlres += path_file;
                        $("#uploadLoading").html(
                            '<span class="badge bg-success p-1"><i class="fa fa-check"></i> Berhasil </span> <a href="' + urlres + '" target="_blank" style="padding-left:10px;"><span class="badge bg-success p-1"><i class="fa fa-eye"></i> Lihat File</span></a>'
                        );
                        self.path_photo = path_file;
                    });
                } else {
                    notification.setSwalAlert('warning', 'Oppss...', 'File lebih dari 2Mb');
                    Swal.fire(notification.swalAlert);
                }
            }
        },
        updateData(){
            Swal.fire(notification.swalLoading)

            let config_update = {
                method: "put",
                url: process.env.VUE_APP_BACKEND_URL_API + 'user/' + this.userData.id,
                data: {
                    name: this.name,
                    username: this.username,
                    username_now: this.username_now,
                    password: this.password,
                    password_konfirm: this.password_konfirm,
                    path_photo: this.path_photo,
                    role: JSON.stringify(this.role)
                },
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('accessToken')
                }
            }

            axios(config_update).then((response) => {
                let dataReponse = response.data.meta.status;
                if(dataReponse == 'success') {
                    Swal.fire(notification.swalAlertDefaultUpdateSuccess);
                    auth.setUserData(response.data.data)
                    window.setTimeout(() => {
                        window.location.reload()
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
}
</script>

<template>
    <Layout>
        <PageHeader title="Profil User" pageTitle="Akun" />
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                        <div class="col-md-12">
                            <h4 class="card-title mb-4">Foto Profil Akun Anda</h4>
                        </div>
                        <div class="col-md-12">
                            <center>
                            <div v-if="userData.avatar == null">
                                <div class="position-relative mb-2">
                                <img
                                    :src="avatar9"
                                    alt="Foto Profil Akun"
                                    class="img-thumbnail"
                                    style="width: 50%"
                                />
                                </div>
                            </div>
                            <div v-else>
                                <div class="position-relative mb-2">
                                <img
                                    v-bind:src="url_apps + userData.avatar"
                                    alt="Foto Profil Akun"
                                    class="img-thumbnail"
                                    style="width: 50%"
                                />
                                </div>
                            </div>

                            <h5 class="font-size-15 text-truncate">
                                {{ userData.name }}
                            </h5>
                            <p class="text-muted mb-0 text-truncate">
                                {{ userRoleText }}
                            </p>
                            </center>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <h4 class="card-title mb-4">Data Profil Akun Anda</h4>
                            </div>
                            <div class="col-md-6">
                                <div class="text-end">
                                <button
                                    type="button"
                                    class="btn btn-success btn-sm"
                                    title="Ubah Data Profil"
                                    v-on:click="() => {this.modalFormShowEdit = true}"
                                >
                                    <i class="fas fa-edit"></i>
                                </button>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <p class="text-muted mb-4">
                                    Hi, berikut data profil user anda.
                                </p>
                            </div>
                            <div class="col-md-12">
                                <div class="table-responsive">
                                    <table class="table table-nowrap mb-0">
                                        <tbody>
                                            <tr>
                                                <th scope="row" style="width: 20%">Username</th>
                                                <td>{{ userData.username }}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Nama</th>
                                                <td>{{ userData.name }}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Terakhir Login ke Aplikasi</th>
                                                <td>{{ fullDateTimeFormat(userData.last_login) }}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Waktu Pembuatan Akun</th>
                                                <td>{{ fullDateTimeFormat(userData.created_at) }}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Waktu Perubahan Data Terakhir</th>
                                                <td>{{ fullDateTimeFormat(userData.updated_at) }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end card -->
            </div>
        </div>
    </Layout>

    <!-- Modal Edit Data -->
    <BModal v-model="modalFormShowEdit" id="modal-edit" size="lg" title="Edit Profil" title-class="font-18" hide-footer>
        <b-form class="p-0" @submit.prevent="updateData">
        <div class="row">
            <div class="col-6">
                <BFormGroup label="Nama" label-for="form-name" class="mb-3">
                    <BFormInput 
                        id="form-name" 
                        type="text" 
                        placeholder="Masukkan Nama..."
                        v-model="name"
                    ></BFormInput>
                </BFormGroup>
            </div>
            <div class="col-6">
                <BFormGroup label="Username" label-for="form-username" class="mb-3">
                    <BFormInput 
                        id="form-username" 
                        type="text" 
                        placeholder="Masukkan Username..."
                        v-model="username"
                    ></BFormInput>
                </BFormGroup>
            </div>
            <div class="col-6">
                <BFormGroup label="Password" label-for="form-password" class="mb-3">
                    <BFormInput 
                        id="form-password" 
                        type="password" 
                        placeholder="Masukkan Password..."
                        v-model="password"
                    ></BFormInput>
                </BFormGroup>
            </div>
            <div class="col-6">
                <BFormGroup label="Password Konfirmasi" label-for="form-password-konfirmasi" class="mb-3">
                    <BFormInput 
                        id="form-password-konfirmasi" 
                        type="password" 
                        placeholder="Masukkan Password Konfirmasi..."
                        v-model="password_konfirm"
                    ></BFormInput>
                </BFormGroup>
            </div>
            <div class="col-12">
                <BFormGroup class="mb-3" label="Foto Profil" label-for="formPhoto">
                    <input type="file" class="form-control" id="formPhoto" v-on:change="inputFilePhoto()" />
                    <div class="respond-input-file float-left" id="uploadLoading"></div>
                    <small class="float-right" style="color: red">*) Max File 2 MB</small>
                </BFormGroup>
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
    </BModal>
</template>