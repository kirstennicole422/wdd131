document.querySelector("#currentyear").innerHTML = new Date().getFullYear();
document.querySelector("#lastModified").innerHTML = `Last Modified: ${String(new Date().getMonth() + 1).padStart(2, "0")}/${String(new Date().getDate()).padStart(2, "0")}/${new Date().getFullYear()} ${String(new Date().getHours()).padStart(2, "0")}:${String(new Date().getMinutes()).padStart(2, "0")}:${String(new Date().getSeconds()).padStart(2, "0")}`;

