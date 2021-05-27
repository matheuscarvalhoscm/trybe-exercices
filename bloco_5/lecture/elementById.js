const paragraph = document.querySelector("#paragraph");
paragraph.style.color = "red";

document.querySelector("#page-title").innerText = 'Night of the Living Dead';
document.querySelector("#second-paragraph").innerText = 'Mudando o estilo do segundo paragrafo';
document.querySelector("#second-paragraph").style.backgroundColor = 'green';
document.querySelector("#subtitle").innerText = 'Esse é o subtítulo';

let subtitle = document.querySelector("#subtitle");
subtitle.style.color = "green";

let changeColor = document.querySelectorAll(".paragrapho");
    changeColor[0].style.color = "yellow";

let subtitleColor = document.querySelectorAll("h4");
    subtitleColor[0].style.color = "red";
    