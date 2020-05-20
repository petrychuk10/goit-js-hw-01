const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const password = prompt("Введите пароль:");

if (password === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

if (password === null) {
  message = "Отменено пользователем!";
}

alert(message);
