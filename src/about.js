const AboutPage = () => {
    const container = document.querySelector(".container");

    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("about-div")

    container.appendChild(aboutDiv)

    const aboutText1 = document.createElement("div");
    aboutText1.textContent = "Welcome to Odin Restaurant, where every bowl of laksa tells a legendary tale. Inspired by the mighty Nordic god himself, we’ve created a menu that’s as bold and unforgettable as the man of myth. At Odin, we specialize in a unique fusion of rich, spicy laksa and extraordinary seafood, crafting flavors that stir the soul and awaken the senses."
    aboutText1.classList.add("text-content")
    aboutDiv.appendChild(aboutText1)

    const aboutText2 = document.createElement("div");
    aboutText2.textContent = "Indulge in our signature Prawn Laksa, a tantalizing blend of fresh, succulent prawns swimming in a creamy, coconut broth. Or try our Crab Laksa, where the sweet, delicate flavors of crab meet fiery spices for a dish that packs a punch. Feeling adventurous? Our exotic Dragon Laksa takes spice to a whole new level, while the luxurious Gold Laksa, with its lavish ingredients, promises a feast fit for the gods themselves."
    aboutText2.classList.add("text-content")
    aboutDiv.appendChild(aboutText2)

    const aboutText3 = document.createElement("div");
    aboutText3.textContent = "At Odin Restaurant, every meal is a battle of flavors, and only the bold survive. Are you ready to feast like a legend?"
    aboutText3.classList.add("text-content")
    aboutDiv.appendChild(aboutText3)
}

export default AboutPage