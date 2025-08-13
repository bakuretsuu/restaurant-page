import { homeContent } from "./home.js";
import { menuContent } from "./menu.js";
import { aboutContent} from "./about.js";

import './style.css';


const contentDiv = document.getElementById("content");
contentDiv.appendChild(homeContent());

document.getElementById("home").addEventListener("click", () => {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(homeContent());
});

document.getElementById("menu").addEventListener("click", () => {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(menuContent());
});

document.getElementById("about").addEventListener("click", () => {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(aboutContent());
});
