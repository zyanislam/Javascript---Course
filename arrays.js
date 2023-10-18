const itemArray1 = [];
const itemArray2 = [];
let i = 0;

let itemHTML = '';

function addItem1() {
    const inputF = document.querySelector('.inputField1');

    let item = inputF.value;
    itemArray1.push(item);
    console.log(itemArray1);
    inputF.value = '';
}

function addItem2() {
    const inputF = document.querySelector('.inputField2');

    let item = inputF.value;
    itemArray2.push(item);
    inputF.value = '';
}

function showItem(){
    const items = document.querySelector('.itemContainer');

    while(i != itemArray2.length){
        const code = `<p>Task No ${i+1}: ${itemArray2[i]}</p>`;
        itemHTML += code;
        i++;
    }
    items.innerHTML = `${itemHTML}`;

}