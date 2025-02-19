let elementCount = 0;

function addElement() {
    const list = document.getElementById('list');
    const item = document.createElement('li');
    item.textContent = `Элемент ${elementCount + 1}`;
    list.appendChild(item);
    elementCount++;
}


function clickBack() {
    event.preventDefault();

    window.location.href = "index.html";
}