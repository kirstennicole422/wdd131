const date = new Date();
document.querySelector("#currentyear").innerHTML = date.getFullYear();
document.querySelector("#lastModified").innerHTML = `Last Modified: ${String(date.getMonth() + 1).padStart(2, "0")}`
    + `/${String(date.getDate()).padStart(2, "0")}`
    + `/${date.getFullYear()} `
    + `${String(date.getHours()).padStart(2, "0")}`
    + `:${String(date.getMinutes()).padStart(2, "0")}:`
+`${String(date.getSeconds()).padStart(2, "0")}`;
    // + `:${toLocaleString(en-US, new Date()).getFullYear()}`;
