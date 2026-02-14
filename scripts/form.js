const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];
let i = 0;
while (i < products.length) {
    const productName = document.querySelector("#product-name");
    const newOption = document.createElement("option");
    newOption.value = products[i].name;
    newOption.className = "product-option";
    newOption.innerHTML = products[i].name;
    productName.append(newOption);
    i++
};

let refresh = JSON.parse(localStorage.getItem("refreshCount")) || 0;
refresh++;
localStorage.setItem("refreshCount", JSON.stringify(refresh));
document.querySelector(".tester").textContent = refresh;