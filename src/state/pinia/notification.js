import { defineStore } from "pinia";

export const useNotificationStore = defineStore("notification", {
    state: () => ({
        type: null,
        message: null,
        swalLoading: {
            title: '<i class="bx bx-loader-alt bx-spin"></i>',
            text: "Loading...",
            showConfirmButton: false,
        },
        swalAlert:{
            icon: null,
            title: null,
            text: null
        },
        swalAlertForm:{
            icon: null,
            title: null,
            html: null
        },
        swalAlertDefaultInputSuccess: {
            icon: 'success',
            title: 'Berhasil',
            text: 'Berhasil Menambahkan Data' 
        },
        swalAlertDefaultInputError: {
            icon: 'error',
            title: 'Opss...',
            text: 'Error Menambahkan Data' 
        },
        swalAlertDefaultUpdateSuccess: {
            icon: 'success',
            title: 'Berhasil',
            text: 'Berhasil Memperbarui Data' 
        },
        swalAlertDefaultUpdateError: {
            icon: 'error',
            title: 'Opss...',
            text: 'Error Memperbarui Data' 
        },
        swalAlertDefaultDeleteSuccess: {
            icon: 'success',
            title: 'Berhasil',
            text: 'Berhasil Menghapus Data' 
        },
        swalAlertDefaultDeleteError: {
            icon: 'error',
            title: 'Opss...',
            text: 'Error Menghapus Data' 
        },
        swalConfirmationAttr: {}
    }),
    actions: {
        notif(type, message){
            this.type = type;
            this.message = message;
        },
        clear() {
            this.type = null;
            this.message = null;
        },
        setSwalAlert(icon,title,text){
            this.swalAlert = {
                icon: icon,
                title: title,
                text: text
            }
        },
        setSwalAlertForm(icon, title, encodeMessage){
            let dataMessage = JSON.parse(encodeMessage);
            let htmlMessage = "";
            dataMessage.forEach(element => {
                htmlMessage += "<li>" + element + "</li>"
            });
            this.swalAlertForm = {
                icon: icon,
                title: title,
                html: htmlMessage
            }
        },
        setSwalConfirmationAttr(title, text){
            this.swalConfirmationAttr = {
                title: title,
                text: text,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Iya",
                cancelButtonColor: "#d33",
                cancelButtonText: "Tidak"
            }
        }
    }
});
