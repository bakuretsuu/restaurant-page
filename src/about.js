export function aboutContent() {
    const container = document.createElement("div");

    const heading = document.createElement("h1");
    heading.textContent = "About KJ's Kitchen";

    const description = document.createElement("p");
    description.textContent =
        "Founded in 2024, KJ's Kitchen started as a small family-run eatery with a passion for home-cooked meals. Our mission is simple: to serve delicious, freshly prepared food made from locally sourced ingredients, all in a warm and welcoming atmosphere.";

    const moreInfo = document.createElement("p");
    moreInfo.textContent =
        "From our signature burgers to our handcrafted pasta, every dish is prepared with care. Whether you're dining in, grabbing takeout, or hosting a special event, our team is dedicated to making every meal memorable.";

    container.appendChild(heading);
    container.appendChild(description);
    container.appendChild(moreInfo);

    return container;
}
