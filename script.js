const topBlock = document.querySelector('.top-block');
const area = document.querySelector('.area');
const editBlock = document.querySelector('.edit-block');
const styleBlock = document.querySelector('.style-block');
const mainBlock = document.querySelector('.main-block');
const addBlock = document.querySelector('.add-block');
const formCreateTable = document.querySelector('.formCreateTable');
const formTableLook = document.querySelector('.formTableLook');
const formCreateList = document.querySelector('.formCreateList');
const colorsBlock = document.querySelector('.colors-block');
const widthBorder = document.formTableLook.widthBorder;
const typeBorder = document.formTableLook.typeBorder;
const colorBorder = document.formTableLook.colorBorder;

// ----------------------- buttons -------------------------------------
function editBtn() {
    area.value = topBlock.innerHTML;
    editBlock.classList.remove('hidden');
    styleBlock.classList.add('hidden');
}

function saveBtn() {
    topBlock.innerHTML = area.value;
    editBlock.classList.add('hidden');
}

function styleBtn() {
    editBlock.classList.add('hidden');
    styleBlock.classList.remove('hidden');
    colorTable();
}

function addBtn() {
    mainBlock.classList.add('hidden');
    addBlock.classList.remove('hidden')
}

function backBtn() {
    mainBlock.classList.remove('hidden');
    addBlock.classList.add('hidden')
}
// ----------------------- buttons --------------------------------------

// ----------------------- fonts changes --------------------------------
function fontSize() {
    topBlock.style.fontSize = event.target.value;
}

function fontFamily() {
    topBlock.style.fontFamily = event.target.value;
}

function fontWeight() {
    topBlock.style.fontWeight = event.target.checked ? 'bold' : 'normal';
}

function fontStyle() {
    event.target.checked ? topBlock.classList.add('style') : topBlock.classList.remove('style');
}
// ----------------------- fonts changes --------------------------------

// ----------------------- choose between table or list -----------------
function chooseBtn() {
    if (event.target.dataset.create === 'table') {
        formCreateTable.classList.remove('hidden');
        formTableLook.classList.remove('hidden');
        formCreateList.classList.add('hidden');
    }
    else if (event.target.dataset.create === 'list') {
        formCreateTable.classList.add('hidden');
        formTableLook.classList.add('hidden');
        formCreateList.classList.remove('hidden');
    }
}
// ----------------------- choose between table or list -----------------

// ---------------------------- create table ----------------------------
function createTable() {
    let form = document.forms['formCreateTable'];
    let countTr = form.countTr.value;
    let countTd = form.countTd.value;
    let widthTd = form.widthTd.value;
    let heigthTd = form.heigthTd.value;

    area.value += `<table>`;
    for (let i = 1; i <= countTr; i++) {
        area.value += `<tr>`;
        for (let j = 1; j <= countTd; j++) {
            area.value += `<td style="border: ${widthBorder.value}px ${typeBorder.value} ${colorBorder.value}; 
            width: ${widthTd}px; height: ${heigthTd}px;">TD</td>`;
        }
        area.value += `</tr>`;
    }
    area.value += `</table>`;

    form.classList.add('hidden');
    formTableLook.classList.add('hidden');

    backBtn();
}
// ---------------------------- create table ----------------------------

// ---------------------------- create list ----------------------------
function createList() {
    let countLi = document.forms['formCreateList'].countLi.value;
    let typeOfM = document.forms['formCreateList'].typeOfM.value;

    area.value += `<ol style="list-style-type: ${typeOfM};">`;
    for (let i = 1; i < countLi; i++) {
        area.value += `<li>item ${i}</li>`;
    }
    area.value += `</ol>`;

    formCreateList.classList.add('hidden');
    backBtn();
}
// ---------------------------- create list ----------------------------

// ------------------------- set colors for block ----------------------
function colorTable() {
    let massColor = ['red', 'green', 'blue', 'lightcolar', 'gray', 'yellow', 'orange', 'purple', 'plum']
    for (let i = 0; i < colorsBlock.children.length; i++) {
        colorsBlock.children[i].style.backgroundColor = massColor[i];
    }
}
// ------------------------ set colors for block -----------------------

// -------------- set click and change font color for each color block ---------------------
function setTextColor() {
    colorsBlock.classList.remove('hidden');
    for (let i = 0; i < colorsBlock.children.length; i++) {
        colorsBlock.children[i].onclick = function () {
            topBlock.style.color = colorsBlock.children[i].style.backgroundColor;
            colorsBlock.classList.add('hidden');
        }
    }
}
// -------------- set click and change font color for each color block ---------------------

// -------------- set click and change bg-color for each color block ---------------------
function setBgColor() {
    colorsBlock.classList.remove('hidden');
    for (let i = 0; i < colorsBlock.children.length; i++) {
        colorsBlock.children[i].onclick = function () {
            topBlock.style.backgroundColor = colorsBlock.children[i].style.backgroundColor;
            colorsBlock.classList.add('hidden');
        }
    }
}
// -------------- set click and change bg-color for each color block ---------------------





