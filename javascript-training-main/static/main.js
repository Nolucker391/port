// тут мы берем обращаюсь к дереву document - элемент с на званием id = text
// var text = document.getElementById("text");

// тут мы берем с названия атрибутов, то есть span, p и т.п
// var spans = document.getElementsByTagName("span");

// тут уже мы отлавливаем элементы с назваением класса которого elem-class
// var elems = document.getElementsByClassName("elem-class");

document.getElementById("main-form").addEventListener("submit", checkForm);

function checkForm(event) {
    event.preventDefault();
    var element = document.getElementById("main-form");

    var name = element.name.value;
    var password = element.pass.value;

    if (password && name) {
        alert("Все заполнено.");
        console.log(password);
        console.log(name);
        // window.location = "https://www.google.ru"; переходит на эту ссылку
        window.location.href = "res.html";
    }
}
