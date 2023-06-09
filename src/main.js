
import { series } from "./datos/series";
import {home} from "./vista/home"
import {header} from "./componentes/header"
import { login } from "./vista/login";

console.log('hola');
console.log(series);


document.querySelector('header').innerHTML = header.template;
header.script();


document.querySelector('main').innerHTML = home.template;
home.script();


