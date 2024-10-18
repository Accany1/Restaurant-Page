import laksaImage from "./laksa-main.png"

const HomePage = () => {
    const containerDiv = document.querySelector(".container");

    const imageDiv = document.createElement("img");
    imageDiv.src = laksaImage;
    imageDiv.alt = "a bowl of nice laksa";
    imageDiv.style.width = "500px";
    imageDiv.style.height = "500px";

    containerDiv.appendChild(imageDiv);

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to Odin Restaurant";
    headline.classList.add("headline");

    containerDiv.appendChild(headline);

    const textContent = document.createElement("div");
    textContent.textContent = "This is  very weirdly good restaurant";
    textContent.classList.add("text-content");

    containerDiv.appendChild(textContent);
}

export default HomePage;