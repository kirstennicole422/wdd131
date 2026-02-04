const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const li = document.createElement("li");
const delButton = document.createElement("button");

button.addEventListener("click", function () {
    if (input.value != "") {
        li.textContent = input.value;
        list.append(li);
        delButton.textContent = "❌";
        delButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
        });

        li.append(delButton);
        input.value = "";
    }
    input.focus();
});