
import {toast} from 'react-toastify'

 window.notify =(msg, type)=> {
   
    const options = {
     
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",   
     }

     switch(type){

        case 'success':
           return toast.success(msg, options)
        case 'error':
           return toast.error(msg, options)
        default:
            // toast(msg, options)
     }



}