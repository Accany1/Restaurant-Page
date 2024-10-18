import "./styles.css";
import HomePage from "./home.js";
import MenuPage from "./menu.js";
import AboutPage from "./about.js";

HomePage()

const containerDiv = document.querySelector(".container")

const menuButton = document.querySelector(".nav-buttons:nth-child(2)")
menuButton.addEventListener("click", () => {
    console.log("menu button clicked")
    containerDiv.textContent = ""
    MenuPage()
})

const homeButton = document.querySelector(".nav-buttons:nth-child(1)")
homeButton.addEventListener("click", () => {
    console.log("home button clicked")
    containerDiv.textContent = ""
    HomePage()
})

const aboutButton = document.querySelector(".nav-buttons:nth-child(3)")
aboutButton.addEventListener("click", () => {
    console.log("about button clicked")
    containerDiv.textContent = ""
    AboutPage()
})