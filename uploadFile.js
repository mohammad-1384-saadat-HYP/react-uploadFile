const btn = document.getElementById("btn");
const input = document.getElementById("input");
const img = document.getElementById("img");

btn.addEventListener("click", () => {
    input.click();
});

input.addEventListener("change", () => {
    const file = input.files[0];
    const fileName = file.name.replace("png", "").replace(".", "");
    img.src = URL.createObjectURL(file);
    img.alt = fileName;
});