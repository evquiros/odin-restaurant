import "./styles.css";
import { displayAbout } from "./about";
import { displayHome } from "./home";

const btnAbout = document.querySelector('.about')
const btnHome = document.querySelector('.home')

btnAbout.addEventListener('click', displayAbout)

btnHome = addEventListener('click', displayHome)