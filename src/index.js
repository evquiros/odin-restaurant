import "./styles.css";
import { displayAbout } from "./about";
import { displayHome } from "./home";
import { displayMenu } from "./menu";

document.addEventListener('DOMContentLoaded', () => {
    const btnAbout = document.querySelector('.about');
    const btnHome = document.querySelector('.home');
    const btnMenu = document.querySelector('.menu');

    btnAbout.addEventListener('click', displayAbout);
    btnHome.addEventListener('click', displayHome);
    btnMenu.addEventListener('click', displayMenu);

    displayHome();
});