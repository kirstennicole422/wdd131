const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");


button.addEventListener("click", function () {
    // if (input.value != "") {
    //     li.textContent = input.value;
    //     list.append(li);
    //     delButton.textContent = "❌";
    //     delButton.addEventListener("click", function () {
    //         list.removeChild(li);
    //         input.focus();
    //     });

    //     li.append(delButton);
    //     input.value = "";
    // }
    // input.focus();

    if (input.value != "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
});


let chaptersArray = getChapterList() || [];

function displayList(item) {
    const li = document.createElement("li");
    const delButton = document.createElement("button");

    li.textContent = item;
    delButton.textContent = "❌";
    list.append(li);
    delButton.addEventListener("click", function () {
        list.removeChild(li);
        deleteButton(li.textContent);
        input.focus();
    });
    li.append(delButton);
}

function deleteButton(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

function setChapterList() {
    localStorage.setItem("myFAvBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("myFAvBOMList"));
}

chaptersArray.forEach(chapter => {
    displayList(chapter);
});