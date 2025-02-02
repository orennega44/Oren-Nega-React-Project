import { toast } from "react-toastify";

export function successMessage(msg){

    toast.success(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        theme: "colored",
        
    });
}


export function errorMessage(msg){
    toast.error(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        theme: "colored",
    });
}


export function logoutMessage(msg){
    toast.success(msg, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        theme: "colored",

    });
}