let form = document.querySelector("form");
let input = document.querySelector("input");
let select = document.querySelector("#select");
let img = document.querySelector("img");
let download = document.querySelector("#download");

var Getqr = async (e) => {
  e.preventDefault();
  const response = await fetch(
    `https://api.qrserver.com/v1/create-qr-code/?size=${select.value}&data=${input.value}`
  );
  img.setAttribute("src", response.url);
  form.reset();
};
form.addEventListener("submit", Getqr);
download.addEventListener("click", async () => {
  const result = await fetch(img.getAttribute("src"));
  const blob = await result.blob();
  const href = URL.createObjectURL(blob);
  const downloadlink = document.createElement("a");
  downloadlink.href = href;
  downloadlink.download = "qrcode";
  document.body.appendChild(downloadlink);
  downloadlink.click();
});
