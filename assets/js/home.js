let category = document.querySelectorAll('#delete-form .field .task-list .category');
for(let i of category) {
    i.style.backgroundColor = i.getAttribute("color");
}

let categoryOptions = document.querySelectorAll('#create-form .field .field-section select .option');
for(let i of categoryOptions) {
    let color = i.getAttribute("value").split(' ')[1];
    i.style.color = color;
}