const itemArray1 = [];
const itemArray2 = [];
const itemArray3 = [];
const itemArrayDate = [];

let i = 0;
let itemHTML = '';
let itemHTML2 = '';


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

function showItem1(){
    const items = document.querySelector('.itemContainer1');

    while(i != itemArray2.length){
        const code = `<p>Task No ${i+1}: ${itemArray2[i]}</p>`;
        itemHTML += code;
        i++;
    }
    items.innerHTML = `${itemHTML}`;

}

function addItem3() {
    const inputF = document.querySelector('.inputField3');
    const inputDate = document.querySelector('.inputField4');

    let item = inputF.value;
    itemArray3.push(item);
    inputF.value = '';

    let date = inputDate.value;
    itemArrayDate.push(date);
    inputDate.value = '';
}

function showItem2(){
    const items = document.querySelector('.itemContainer2');

    while(i != itemArray3.length){
        const code = `<p class="iField1">Task No ${i+1}: ${itemArray3[i]}</p>`;
        itemHTML2 += code;
        i++;
    }
    items.innerHTML = `${itemHTML2}`;


}