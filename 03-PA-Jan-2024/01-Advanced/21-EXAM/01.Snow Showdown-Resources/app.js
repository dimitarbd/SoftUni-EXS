window.addEventListener("load", solve);

function solve() {

  let inputs = {
    snowmanName: document.getElementById('snowman-name'),
    snowmanHeight: document.getElementById('snowman-height'),
    location: document.getElementById('location'),
    creatorName: document.getElementById('creator-name'),
    specialAttribute: document.getElementById('special-attribute'),
  }

  let addBtn = document.querySelector('.add-btn');

  addBtn.addEventListener('click', onAddClick);

  let snowmanPreview = document.querySelector('.snowman-preview');
  let snowList = document.querySelector('.snow-list');
  let body = document.querySelector('.body');
  let main;

  function onAddClick(event) {
    event.preventDefault();

    if (
      inputs.snowmanName.value == '' ||
      inputs.snowmanHeight.value == '' ||
      inputs.location.value == '' ||
      inputs.creatorName.value == '' ||
      inputs.specialAttribute.value == ''
    ) {
      return;
    }

    let snowmanName = inputs.snowmanName.value;
    let snowmanHeight = inputs.snowmanHeight.value;
    let location = inputs.location.value;
    let creatorName = inputs.creatorName.value;
    let specialAttribute = inputs.specialAttribute.value;

    addBtn.parentElement.reset();
    addBtn.disabled = true;

    let snowResult = createSnowmanInfo(snowmanName, snowmanHeight, location, creatorName, specialAttribute);
    let snowPrevBtn = createSnowmanPreview(snowmanName, snowmanHeight, location, creatorName, specialAttribute);

    snowmanPreview.appendChild(snowResult)
    snowmanPreview.appendChild(snowPrevBtn)
  }

  function createSnowmanInfo(snowmanName, snowmanHeight, location, creatorName, specialAttribute) {
    let element = e('li');
    element.className = 'snowman-info';

    let article = e('article');
    article.appendChild(e('p', `Name: ${snowmanName}`));
    article.appendChild(e('p', `Height: ${snowmanHeight}`));
    article.appendChild(e('p', `Location: ${location}`));
    article.appendChild(e('p', `Creator: ${creatorName}`));
    article.appendChild(e('p', `Attribute: ${specialAttribute}`));

    element.appendChild(article);

    return element;
  }

  function createSnowmanInfo2(snowmanName, snowmanHeight, location, creatorName, specialAttribute) {
    let element = e('li');
    element.className = 'snowman-content';

    let article = e('article');
    article.appendChild(e('p', `Name: ${snowmanName}`));
    article.appendChild(e('p', `Height: ${snowmanHeight}`));
    article.appendChild(e('p', `Location: ${location}`));
    article.appendChild(e('p', `Creator: ${creatorName}`));
    article.appendChild(e('p', `Attribute: ${specialAttribute}`));

    element.appendChild(article);

    return element;
  }

  function createSnowmanPreview(snowmanName, snowmanHeight, location, creatorName, specialAttribute) {
    let divElement = e('div');

    let editBtn = e('button', 'Edit');
    editBtn.className = 'edit-btn';
    editBtn.addEventListener('click', () => onEditClick(snowmanName, snowmanHeight, location, creatorName, specialAttribute));

    let nextBtn = e('button', 'Next');
    nextBtn.className = 'next-btn';
    nextBtn.addEventListener('click', () => onNextClick(snowmanName, snowmanHeight, location, creatorName, specialAttribute));

    divElement.appendChild(editBtn);
    divElement.appendChild(nextBtn);

    return divElement;
  }

  function onEditClick(snowmanName, snowmanHeight, location, creatorName, specialAttribute) {
    inputs.snowmanName.value = snowmanName;
    inputs.snowmanHeight.value = snowmanHeight;
    inputs.location.value = location;
    inputs.creatorName.value = creatorName;
    inputs.specialAttribute.value = specialAttribute;

    snowmanPreview.textContent = "";
    addBtn.disabled = false;
  }

  function onNextClick(snowmanName, snowmanHeight, location, creatorName, specialAttribute) {
    let result = createYourSnowman(snowmanName, snowmanHeight, location, creatorName, specialAttribute);
    snowList.appendChild(result);
    snowmanPreview.textContent = "";

  }

  function createYourSnowman(snowmanName, snowmanHeight, location, creatorName, specialAttribute) {
    let element = createSnowmanInfo2(snowmanName, snowmanHeight, location, creatorName, specialAttribute);

    let sendBtn = e('button', 'Send');
    sendBtn.className = 'send-btn';
    sendBtn.addEventListener('click',onSendClick);

    element.appendChild(sendBtn);

    return element;
  }

  function onSendClick(e) {
    
    onDelete(e.target.parentElement)
    main = document.getElementById('hero');
    body.innerHTML = '';

    let h1 = document.createElement('h1');
    h1.textContent = "Snow Showdown";
    
    let btn = createBtn("", "Back");
    btn.className = "back-btn";
    btn.addEventListener('click', onReset)
    let src = document.createElement('script');
    src.src = "app.js"


    document.querySelector('.body').appendChild(h1);
    document.querySelector('.body').appendChild(src);
    document.querySelector('.body').appendChild(btn);

  }

  function e(type, content) {
    let element = document.createElement(type);
    if (content) {
      element.textContent = content;
    }

    return element;
  }

  function onDelete(elRef) {
    elRef.remove();
  }

}
