window.addEventListener('load', solve);

function solve() {
    let formRef = document.querySelector("form");
    formRef.addEventListener("submit", onSubmit);

    let firstNameRef = document.getElementById("first-name");
    let lastNameRef = document.getElementById("last-name");
    let peopleCountRef = document.getElementById("people-count");
    let fromDateRef = document.getElementById("from-date");
    let daysCountRef = document.getElementById("days-count");
    let infoTicketUl = document.querySelector("#info-ticket ul")
    let nextBtnRef = document.getElementById("next-btn")
    let confirmTicketUl = document.querySelector("#confirm-ticket-section ul");
    let body = document.getElementById("body");
    let main;


    function onSubmit(e) {
        e.preventDefault();
        let firstName = firstNameRef.value;
        let lastName = lastNameRef.value;
        let peopleCount = peopleCountRef.value;
        let fromDate = fromDateRef.value;
        let daysCount = daysCountRef.value;



        if (!firstName || !lastName || !peopleCount || !fromDate || !daysCount) {
            return
        }

        let ticket = createTicket(firstName, lastName, peopleCount, fromDate, daysCount);

        infoTicketUl.appendChild(ticket);
        toggleBtnNext();
        formRef.reset();
    }

    function createTicket(firstName, lastName, peopleCount, fromDate, daysCount) {
        let li = document.createElement("li");
        li.classList.add("ticket");
        let innerHTMLContent = "<article>";
        innerHTMLContent += `<h3>Name: ${firstName} ${lastName}</h3>`;
        innerHTMLContent += `<p>Form date: ${fromDate}</p>`;
        innerHTMLContent += `<p>For ${daysCount} days</p>`;
        innerHTMLContent += `<p>For ${peopleCount} people</p>`
        innerHTMLContent += "</article>";

        li.innerHTML = innerHTMLContent;


        let editBtn = createBtn("edit-btn", "Edit");
        let continueBtn = createBtn("continue-btn", "Continue");
        editBtn.addEventListener('click', onEdit);
        continueBtn.addEventListener('click', onContinue);

        li.appendChild(editBtn);
        li.appendChild(continueBtn);

        return li;
    }

    function toggleBtnNext() {
        nextBtnRef.disabled = !nextBtnRef.disabled;
    }

    function onEdit(e) {
        let articleChildren = e.currentTarget.parentElement.querySelector("article").children;
        let nameData = articleChildren[0].textContent.split(" ");
        let dataTokens = articleChildren[1].textContent.split(" ");
        let daysCountToken = articleChildren[2].textContent.split(" ");
        let peopleCountToken = articleChildren[3].textContent.split(" ");


        let firstName = nameData[1];
        let lastName = nameData[2];
        let fromDate = dataTokens[2];
        let daysCount = daysCountToken[1];
        let peopleCount = peopleCountToken[1];

        firstNameRef.value = firstName;
        lastNameRef.value = lastName;
        fromDateRef.value = fromDate;
        daysCountRef.value = daysCount;
        peopleCountRef.value = peopleCount;

        toggleBtnNext();
        infoTicketUl.innerHTML = '';

    }


    function onContinue(e) {
        let li = e.currentTarget.parentElement;
        let btns = li.querySelectorAll("button");
        btns[0].remove();
        btns[1].remove();

        let confirmBtn = createBtn("confirm-btn", "Confirm");
        confirmBtn.addEventListener('click', onConfirm);

        let cancelBtn = createBtn("cancel-btn", "Cancel");
        cancelBtn.addEventListener("click", onCancel)

        li.appendChild(confirmBtn);
        li.appendChild(cancelBtn);
        confirmTicketUl.appendChild(li);

    }

    function createBtn(classes, text) {
        let btn = document.createElement("button");
        classes && btn.classList.add(classes);
        btn.textContent = text;
        return btn;
    }

    function onCancel(e) {
        onDelete(e.target.parentElement);
        toggleBtnNext();
    }

    function onConfirm(e) {
        onDelete(e.target.parentElement)
        main = document.getElementById("main");
        body.innerHTML = "";
        let h1 = document.createElement("h1");
        h1.textContent = "Thank you, have a nice day!";
        h1.id = "thank-you";
        let btn = createBtn("", "Back");
        btn.id = "back-btn";
        btn.addEventListener('click', onReset);
        body.appendChild(h1);
        body.appendChild(btn);

    }

    function onReset() {
        body.innerHTML = "";
        body.appendChild(main);
        toggleBtnNext();
        
    }

    function onDelete(elRef) {
        elRef.remove();
    }

}




