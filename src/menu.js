import prawnImg from "./prawn-laksa.png"
import crabImg from "./crab-laksa.png"
import dragonImg from "./dragon-laksa.png"
import goldImg from "./gold-laksa.png"

const MenuPage = () => {
    const container = document.querySelector(".container");
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("menu-container");

    container.appendChild(containerDiv);

    const prawnDiv = document.createElement("div");
    prawnDiv.classList.add("menu-div");

    const prawnImgDiv = document.createElement("img");
    prawnImgDiv.src = prawnImg;
    prawnImgDiv.alt = "prawn laksa";
    prawnImgDiv.style.width = "200px";
    prawnImgDiv.style.height = "200px";

    const prawnImgTitle = document.createElement("div")
    prawnImgTitle.textContent = "Prawn Laksa"
    prawnImgTitle.classList.add("menu-titles")

    prawnDiv.appendChild(prawnImgDiv);
    prawnDiv.appendChild(prawnImgTitle);

    containerDiv.appendChild(prawnDiv);

    const crabDiv = document.createElement("div");
    crabDiv.classList.add("menu-div");

    const crabImgDiv = document.createElement("img");
    crabImgDiv.src = crabImg;
    crabImgDiv.alt = "crab laksa";
    crabImgDiv.style.width = "200px";
    crabImgDiv.style.height = "200px";

    const crabImgTitle = document.createElement("div")
    crabImgTitle.textContent = "Crab Laksa"
    crabImgTitle.classList.add("menu-titles")

    crabDiv.appendChild(crabImgDiv);
    crabDiv.appendChild(crabImgTitle);

    containerDiv.appendChild(crabDiv);

    const dragonDiv = document.createElement("div");
    dragonDiv.classList.add("menu-div");

    const dragonImgDiv = document.createElement("img");
    dragonImgDiv.src = dragonImg;
    dragonImgDiv.alt = "dragon laksa";
    dragonImgDiv.style.width = "200px";     
    dragonImgDiv.style.height = "200px";

    const dragonImgTitle = document.createElement("div")
    dragonImgTitle.textContent = "Dragon Laksa"
    dragonImgTitle.classList.add("menu-titles")

    dragonDiv.appendChild(dragonImgDiv);
    dragonDiv.appendChild(dragonImgTitle);

    containerDiv.appendChild(dragonDiv);

    const goldDiv = document.createElement("div");
    goldDiv.classList.add("menu-div");

    const goldImgDiv = document.createElement("img");
    goldImgDiv.src = goldImg;
    goldImgDiv.alt = "gold laksa";
    goldImgDiv.style.width = "200px";
    goldImgDiv.style.height = "200px";

    const goldImgTitle = document.createElement("div")
    goldImgTitle.textContent = "Gold Laksa"
    goldImgTitle.classList.add("menu-titles")

    goldDiv.appendChild(goldImgDiv);
    goldDiv.appendChild(goldImgTitle);

    containerDiv.appendChild(goldDiv);
}

export default MenuPage