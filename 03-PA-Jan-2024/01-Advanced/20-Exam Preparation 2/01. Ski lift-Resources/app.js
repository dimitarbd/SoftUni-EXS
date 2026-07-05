window.addEventListener('load', solve);

function solve() {

    let inputs = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        numberOfPeople: document.getElementById('people-count'),
        fromDate: document.getElementById('from-date'),
        numberOfDays: document.getElementById('days-count'),
    }

    let nextBtn = document.getElementById('next-btn');

    nextBtn.addEventListener('click', onNextStep);

    let ticketPreview = document.querySelector('.ticket-info-list');
    let confirmTicket = document.querySelector('.confirm-ticket');
    let body = document.getElementById('body');
    let main;

    function onNextStep(event) {
        event.preventDefault();

        if (
            inputs.firstName.value == '' ||
            inputs.lastName.value == '' ||
            inputs.numberOfPeople.value == '' ||
            inputs.fromDate.value == '' ||
            inputs.numberOfDays.value == ''
        ) {
            return;
        }

        let firstName = inputs.firstName.value;
        let lastName = inputs.lastName.value;
        let numberOfPeople = Number(inputs.numberOfPeople.value);
        let fromDate = inputs.fromDate.value;
        let numberOfDays = Number(inputs.numberOfDays.value);

        nextBtn.parentElement.reset();
        nextBtn.disabled = true;

        let result = createTicketPreview(firstName, lastName, numberOfPeople, fromDate, numberOfDays)
        ticketPreview.appendChild(result);

    }

    function createTicketInfo(firstName, lastName, numberOfPeople, fromDate, numberOfDays) {
        let element = e('li');
        element.className = 'ticket';

        let article = e('article');
        article.appendChild(e('h3', `Name: ${firstName} ${lastName}`));
        article.appendChild(e('p', `From date: ${fromDate}`));
        article.appendChild(e('p', `For ${numberOfDays} days`));
        article.appendChild(e('p', `For ${numberOfPeople} people`));

        element.appendChild(article);

        return element;

    }

    function createTicketPreview(firstName, lastName, numberOfPeople, fromDate, numberOfDays) {
        let element = createTicketInfo(firstName, lastName, numberOfPeople, fromDate, numberOfDays);

        let editBtn = e('button', 'Edit');
        editBtn.className = 'edit-btn';
        editBtn.addEventListener('click', () => onEditTicket(firstName, lastName, numberOfPeople, fromDate, numberOfDays));

        let continueBtn = e('button', 'Continue');
        continueBtn.className = 'continue-btn';
        continueBtn.addEventListener('click', () => onContinueTicket(firstName, lastName, numberOfPeople, fromDate, numberOfDays));

        element.appendChild(editBtn);
        element.appendChild(continueBtn);

        return element;
    }

    function onEditTicket(firstName, lastName, numberOfPeople, fromDate, numberOfDays) {
        inputs.firstName.value = firstName;
        inputs.lastName.value = lastName;
        inputs.dateIn.value = dateIn;
        inputs.dateOut.value = dateOut;
        inputs.peopleCount.value = peopleCount;

        infoList.textContent = "";
        nextBtn.disabled = false;
    }

    function onContinueTicket(firstName, lastName, numberOfPeople, fromDate, numberOfDays) {
        let result = createConfirmation(firstName, lastName, numberOfPeople, fromDate, numberOfDays);
        confirmTicket.appendChild(result);
        ticketPreview.textContent = "";

    }

    function createConfirmation(firstName, lastName, numberOfPeople, fromDate, numberOfDays) {
        let element = createTicketInfo(firstName, lastName, numberOfPeople, fromDate, numberOfDays);

        let confirmBtn = e('button', 'Confirm');
        confirmBtn.className = 'confirm-btn';
        confirmBtn.addEventListener('click', onConfirmClick);

        let cancelBtn = e('button', 'Cancel');
        cancelBtn.className = 'cancel-btn';
        cancelBtn.addEventListener('click', onCancelClick);

        element.appendChild(confirmBtn);
        element.appendChild(cancelBtn);

        return element;

    }

    function onCancelClick() {
        confirmTicket.textContent = '';
        nextBtn.disabled = false;
    }

    function onConfirmClick(e) {
        onDelete(e.target.parentElement)
        main = document.getElementById('main');
        body.innerHTML = '';
        
        let h1 = document.createElement('h1');
        h1.textContent = "Thank you, have a nice day!";
        h1.id = "thank-you";
        let btn = createBtn("", "Back");
        btn.id = "back-btn";
        btn.addEventListener('click', onReset)
        document.getElementById('body').appendChild(h1);
        document.getElementById('body').appendChild(btn);
        
    }



    function e(type, content) {
        let element = document.createElement(type);
        if (content) {
            element.textContent = content;
        }

        return element;
    }

    function onReset() {
        body.innerHTML = "";
        body.appendChild(main);
        nextBtn.disabled = false;
    }

    function onDelete(elRef) {
        elRef.remove();
    }

}




