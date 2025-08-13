export function menuContent() {
    const container = document.createElement("div");

    const heading = document.createElement("h1");
    heading.textContent = "KJ's Kitchen Menu";

    const list = document.createElement("ul");
    ["Burger", "Pasta", "Salad"].forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });

    container.appendChild(heading);
    container.appendChild(list);

    return container;
}
