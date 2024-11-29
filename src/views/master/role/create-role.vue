<script>
import Swal from "sweetalert2";
import axios from "axios";

// Pinia State Management
import { useNotificationStore } from '@/state/pinia'
const notification = useNotificationStore()

export default {
    name: 'CreateRole',
    data() {
        return {
            namaRole: null,
            deskripsiRole: null,
        }
    },
    emits: ['closeFormRefreshTable'],
    methods:{
        StoreData(){
            Swal.fire(notification.swalLoading)

            let config_store = {
                method: "post",
                url: process.env.VUE_APP_BACKEND_URL_API + 'roles',
                data: {
                    role_name: this.namaRole,
                    role_description: this.deskripsiRole
                },
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
                <BFormGroup class="mb-3" label="Nama Role" label-for="namaRole">
                    <BFormInput 
                        id="namaRole" 
                        type="text" 
                        placeholder="Masukkan Nama Role..."
                        v-model="namaRole"
                    ></BFormInput>
                </BFormGroup>
            </div>
            <div class="col-12">
                <BFormGroup class="mb-3" label="Deskripsi Role" label-for="deskripsiRole">
                    <textarea 
                        class="form-control" 
                        id="deskripsiRole" 
                        cols="30" 
                        rows="10"
                        placeholder="Masukkan Deskripsi Role..."
                        v-model="deskripsiRole"
                    ></textarea>
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
</template>
