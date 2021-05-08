const fileUploadBtn = document.querySelector(".btn");
const FileUpload = document.querySelector(".FileUpload");
const uploads = document.querySelector(".uploaded");
const shareBtn = document.querySelector(".shareBtn");
// LISTENER

fileUploadBtn.addEventListener("click", (e) => {
  if (FileUpload) {
    FileUpload.click();
  }
  e.preventDefault();
});
FileUpload.addEventListener("change", handleEvent);

function handleEvent() {
  if (this.files.length) {
    const newDiv = document.createElement("div");
    uploads.appendChild(newDiv);
    newDiv.setAttribute("class", "file");
    shareBtn.classList.add("showBtn");

    for (let i = 0; i < this.files.length; i++) {
      // filename
      const name = document.createElement("div");
      name.classList.add("name");
      name.innerHTML = this.files[i].name;
      newDiv.appendChild(name);
      // filesize
      const size = document.createElement("div");
      size.classList.add("size");
      newDiv.appendChild(size);
      size.innerHTML = this.files[i].size + " bytes";
      // DELETE
      const delBtn = document.createElement("button");
      delBtn.classList.add("Delete");
      delBtn.classList.add("delBtn");
      newDiv.appendChild(delBtn);
      delBtn.innerHTML = `<i class="fas fa-trash"></i>`;
      delBtn.addEventListener("click", (e) => {
        clickedOne = e.target;
        var parent = clickedOne.parentElement.parentElement;
        parent.remove();
      });
    }
  }
}
document.querySelector(".shareBtn").addEventListener("click", () => {
  alert("Sharing files through" + HTMLOptionsCollection);
});
