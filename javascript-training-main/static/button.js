var num_list = 0;

function add_num_list(element) {
    num_list++;
    element.innerHTML = "Вы нажали на кнопку: " + num_list;
    element.style.color = "green";
}

