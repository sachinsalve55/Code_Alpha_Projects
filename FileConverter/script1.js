const textarea = document.querySelector("textarea"),
fileNameInput = document.querySelector(".file-name input"),
selectMenu = document.querySelector(".save-as select"),
saveBtn = document.querySelector(".save-btn");

saveBtn.addEventListener("click", () => {
    //getting selected option text
    let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;
    console.log(selectedOption.split(" ")[0]);
    
});

saveBtn.addEventListener("click", () => {
    const blob = new Blob([textarea.value], {type: selectMenu.value});
    //URL.creareObjectURL creats a url that represent passed object
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");// creating <a> tag
    link.download = fileNameInput.value;//passing file name as download
    link.href = fileUrl;//passing   fileUrl as href value of link
    link.click();//clicking link so the file download
})