const enrollBtn = document.querySelector('#enrollBtn');
const status = document.querySelector('#status');
const studentName = document.querySelector('#studentName');
const welcome = document.querySelector('#welcome');
const format = document.querySelector('#format');
const strong = document.querySelector('#strong');

enrollBtn.addEventListener('click', function () {
    status.textContent = 'Ви успішно записані на курс!';
    enrollBtn.textContent = 'Запис оформлено';
});

studentName.addEventListener('input', function () {
    const name = studentName.value.trim();

    if (name === '') {
        welcome.textContent = 'Вітаємо, гостю!';
    } else {
        welcome.textContent = 'Вітаємо, ' + name + '!';
    }
});

format.addEventListener('change', function () {
    const selectedPrice = Number(format.value);
    strong.textContent = selectedPrice + 'грн';
});

const detailsBtn = document.querySelector('#detailsBtn');
const details = document.querySelector('#details');

detailsBtn.addEventListener('click', function () {
    details.classList.toggle('hidden');

    if (details.classList.contains('hidden')) {
        detailsBtn.textContent = 'Показати опис';
    } else {
        detailsBtn.textContent = 'Приховати опис';
    }
});

const card = document.querySelector('#card');
const themeBtn = document.querySelector('#themeBtn');

themeBtn.addEventListener('click', function () {
    card.classList.toggle('dark');

    if (card.classList.contains('dark')) {
        themeBtn.textContent = 'Світла тема';
    } else {
        themeBtn.textContent = 'Темна тема';
    }
});