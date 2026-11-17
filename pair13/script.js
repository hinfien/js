const form = document.getElementById('application-form');
const nameInput = document.getElementById('name-input');
const eventInput = document.getElementById('event-input');
const errorMessage = document.getElementById('error-message');

const list = document.getElementById('applications-list');
const emptyMessage = document.getElementById('empty-message');
const totalCount = document.getElementById('total-count');
const confirmedCount = document.getElementById('confirmed-count');
const clearBtn = document.getElementById('clear-btn');

// Оновлення лічильників та напису про порожній список
function updateStats() {
    const total = list.children.length;
    const confirmed = list.querySelectorAll('.card.confirmed').length;

    totalCount.textContent = total;
    confirmedCount.textContent = confirmed;
    emptyMessage.style.display = total === 0 ? 'block' : 'none';
}

// Створення картки заявки
function createCard(name, eventName) {
    const card = document.createElement('div');
    card.className = 'card';

    const info = document.createElement('div');

    const nameEl = document.createElement('div');
    nameEl.className = 'participant-name';
    nameEl.textContent = name;

    const eventEl = document.createElement('div');
    eventEl.className = 'event-name';
    eventEl.textContent = eventName;

    const statusEl = document.createElement('span');
    statusEl.className = 'status';
    statusEl.textContent = 'Очікує';

    info.appendChild(nameEl);
    info.appendChild(eventEl);
    info.appendChild(statusEl);

    const actions = document.createElement('div');
    actions.className = 'card-actions';

    const confirmBtn = document.createElement('button');
    confirmBtn.type = 'button';
    confirmBtn.className = 'confirm-btn';
    confirmBtn.textContent = 'Підтвердити';

    confirmBtn.addEventListener('click', function () {
        const isConfirmed = card.classList.toggle('confirmed');
        statusEl.textContent = isConfirmed ? 'Підтверджено' : 'Очікує';
        confirmBtn.textContent = isConfirmed ? 'Скасувати' : 'Підтвердити';
        updateStats();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Видалити';

    deleteBtn.addEventListener('click', function () {
        card.remove();
        updateStats();
    });

    actions.appendChild(confirmBtn);
    actions.appendChild(deleteBtn);

    card.appendChild(info);
    card.appendChild(actions);

    return card;
}

// Додавання нової заявки без перезавантаження сторінки
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const eventName = eventInput.value.trim();

    if (name === '' || eventName === '') {
        errorMessage.textContent = 'Будь ласка, заповніть обидва поля.';
        return;
    }

    errorMessage.textContent = '';

    const card = createCard(name, eventName);
    list.appendChild(card);

    nameInput.value = '';
    eventInput.value = '';
    updateStats();
});

// Очищення всіх заявок із підтвердженням
clearBtn.addEventListener('click', function () {
    if (list.children.length === 0) {
        return;
    }

    const agreed = confirm('Ви впевнені, що хочете видалити всі заявки?');
    if (agreed) {
        list.innerHTML = '';
        updateStats();
    }
});