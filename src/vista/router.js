
import { registro } from "./registro";
import { login } from "./login";

export const router = {
    login:()=>{
        document.querySelector('main').innerHTML = login.template;
        login.script()
    },
    registro:()=>{
       
        document.querySelector('main').innerHTML = registro.template;
        registro.script()
    }
   
}