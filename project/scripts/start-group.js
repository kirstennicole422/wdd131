let regionList = JSON.parse(localStorage.getItem("regions"));

let z = 0;
while (z < regionList.length) {
    const regionName = document.querySelector("#region-name");
    const newOption = document.createElement("option");
    newOption.value = regionList[z];
    newOption.className = "option";
    newOption.innerHTML = regionList[z];
    // console.log(`this is iteration ${z}`);
    document.querySelector("#region-name").append(newOption);
    z++;
};

