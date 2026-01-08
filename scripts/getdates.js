const modificationdate = new Date(document.lastModified);

document.querySelector("#currentyear").innerHTML = modificationdate.getFullYear();
document.querySelector("#lastModified").innerHTML = `Last Modified: ${String(modificationdate.getMonth() + 1).padStart(2, "0")}/${String(modificationdate.getDate()).padStart(2, "0")}/${modificationdate.getFullYear()} ${String(modificationdate.getHours()).padStart(2, "0")}:${String(modificationdate.getMinutes()).padStart(2, "0")}:${String(modificationdate.getSeconds()).padStart(2, "0")}`;