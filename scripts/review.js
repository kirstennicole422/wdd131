let refresh = JSON.parse(localStorage.getItem("refreshCount")) || 0;
refresh++;
localStorage.setItem("refreshCount", JSON.stringify(refresh));
if (refresh == 1) {
    document.querySelector("#review-text").textContent = `This is your first review.0`;
}
else {
    document.querySelector("#review-text").textContent = `This is review number ${refresh}.`;
};