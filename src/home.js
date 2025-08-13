export function homeContent() {
    const container = document.createElement("div");

    const heading = document.createElement("h1");
    heading.textContent = "KJ's Kitchen";

    const restaurantDesc = document.createElement("p");
    restaurantDesc.textContent =
        "KJ's Kitchen is a cozy neighborhood spot serving fresh, homemade meals all day. With warm wooden décor, soft lighting, and the aroma of freshly brewed coffee in the air, it’s the perfect place to enjoy breakfast, lunch, or dinner. The menu features hearty comfort foods, crisp salads, and sweet desserts, all made from locally sourced ingredients. Whether you’re stopping by for a quick bite or a relaxed meal with friends, KJ's Kitchen offers friendly service and a welcoming atmosphere.";

    container.appendChild(heading);
    container.appendChild(restaurantDesc);

    return container;
}
