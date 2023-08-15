let userNameJson = localStorage.getItem("myKey");
let userName = "";
let visitTime = "";

function createVisitTime() {
    let date = new Date();
    visitTime = String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear() + ' в ' +
        String(date.getHours()).padStart(2, '0') + ':' + String(date.getMinutes()).padStart(2, '0');
    localStorage.setItem("lastVisit", JSON.stringify(visitTime));
}

if (userNameJson) {
    userName = JSON.parse(userNameJson);
    let visitTimeJson = localStorage.getItem("lastVisit");
    visitTime = JSON.parse(visitTimeJson);
    alert("Здравствуйте, " + userName + "! С возвращением! В последний раз Вы посещали страницу " + visitTime);
    createVisitTime();
} else {
    userName = prompt("Добро пожаловать! Представьтесь, пожалуйста", "Name");
    if (!userName) {
        localStorage.removeItem("myKey");
    } else {
        localStorage.setItem("myKey", JSON.stringify(userName));
        createVisitTime();
    }
}

const btnClear = document.querySelector("#clear");
btnClear.addEventListener('click', () => {
    localStorage.removeItem("myKey");
    localStorage.removeItem("lastVisit");
})