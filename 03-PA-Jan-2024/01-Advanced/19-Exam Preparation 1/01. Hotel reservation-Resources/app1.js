window.addEventListener('load', solve);

function solve() {

    let inputs = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        dateIn: document.getElementById('date-in'),
        dateOut: document.getElementById('date-out'),
        peopleCount: document.getElementById('people-count')
    }

    let nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', onNextClick);

    let infolist = document.querySelector('.info-list');
    let confirmList = document.querySelector('.confirm-list');
    let output = document.getElementById("verification");

    function onNextClick(event) {
        event.preventDefault();

        if (
            inputs.firstName.value == "" ||
            inputs.lastName.value == "" ||
            inputs.dateIn.value == "" ||
            inputs.dateOut.value == "" ||
            inputs.peopleCount.value == ""
        ) {
            return
        }

        let firstName = inputs.firstName.value;
        let lastName = inputs.lastName.value;;
        let dateIn = inputs.dateIn.value;
        let dateOut = inputs.dateOut.value;
        let peopleCount = Number(inputs.peopleCount.value);

        if ((new Date(dateIn)).getTime() >= (new Date(dateOut)).getTime()) {
            return
        }

        nextBtn.parentElement.reset();
        nextBtn.disabled = true;

        let result = createPreview(firstName, lastName, dateIn, dateOut, peopleCount);
        infolist.appendChild(result);
    }

    function createInfo(firstName, lastName, dateIn, dateOut, peopleCount) {
        let element = e('li');
        element.className = 'reservation-content';

        let article = e('article');
        article.appendChild(e('h3', `Name: ${firstName} ${lastName}`));
        article.appendChild(e('p', `From  date: ${dateIn}`));
        article.appendChild(e('p', `To date: ${dateOut}`));
        article.appendChild(e('p', `For ${peopleCount} people`));

        element.appendChild(article);

        return element;

    }

    function createPreview(firstName, lastName, dateIn, dateOut, peopleCount) {
        let element = createInfo(firstName, lastName, dateIn, dateOut, peopleCount);

        let editBtn = e('button', 'Edit');
        editBtn.className = 'edit-btn';
        editBtn.addEventListener('click', () => onEditClick(firstName, lastName, dateIn, dateOut, peopleCount));

        let continueBtn = e('button', 'Continue');
        continueBtn.className = 'continue-btn';
        continueBtn.addEventListener('click', () => onContinueClick(firstName, lastName, dateIn, dateOut, peopleCount));

        element.appendChild(editBtn);
        element.appendChild(continueBtn);

        return element;
    }

    function onEditClick(firstName, lastName, dateIn, dateOut, peopleCount) {
        inputs.firstName.value = firstName;
        inputs.lastName.value = lastName;
        inputs.dateIn.value = dateIn;
        inputs.dateOut.value = dateOut;
        inputs.peopleCount.value = peopleCount;

        infolist.textContent = "";
        nextBtn.disabled = false;
    }

    function onContinueClick(firstName, lastName, dateIn, dateOut, peopleCount) {
        let result = createConfimation(firstName, lastName, dateIn, dateOut, peopleCount);
        confirmList.appendChild(result);
        infolist.textContent = "";
    }

    function createConfimation(firstName, lastName, dateIn, dateOut, peopleCount) {
        let element = createInfo(firstName, lastName, dateIn, dateOut, peopleCount);

        let confirmBtn = e('button', 'Confirm');
        confirmBtn.className = 'confim-btn';
        confirmBtn.addEventListener('click', () => onFinishClick(true));

        let cancelBtn = e('button', 'Cancel');
        cancelBtn.className = 'cancel-btn';
        cancelBtn.addEventListener('click', () => onFinishClick(false));

        element.appendChild(confirmBtn);
        element.appendChild(cancelBtn);

        return element;
    }

    function onFinishClick(confirmed) {
        let className = confirmed ? 'reservation-confirmed' : 'reservation-cancelled';
        let text = confirmed ? 'Confirmed.' : 'Cancelled.';

        output.className = className;
        output.textContent = text;

        confirmList.textContent = "";

        nextBtn.disabled = false;
    }

    function e(type, content) {
        let element = document.createElement(type);
        if (content) {
            element.textContent = content;
        }
        return element;
    }
}

