const itemArray = [];

function addItem() {
    const inputF = document.querySelector('.inputField');

    let item = inputF.value;
    itemArray.push(item);
    console.log(itemArray);
    inputF.value = '';
}