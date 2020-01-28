const rootNode = document.getElementById('root');
const ZERO = 0;
const MINUS_ONE = -1;

function generateNameInput(setObj) {
  const fieldset = document.createElement('fieldset');
  const labelName = document.createElement('label');
  const labelText = document.createTextNode('Name');
  labelName.appendChild(labelText);
  fieldset.appendChild(labelName);
  const input = document.createElement('input');
  input.type = 'text';
  input.name = setObj.name;
  input.className = 'setName';
  input.value = setObj.name || '';
  fieldset.appendChild(input);

  const saveButton = document.createElement('input');
  saveButton.type = 'submit';
  saveButton.value = 'Save changes';
  saveButton.name = setObj.name;
  saveButton.className = 'saveButton';
  fieldset.appendChild(saveButton);

  const сancelButton = document.createElement('input');
  сancelButton.type = 'submit';
  сancelButton.value = 'Сancel';
  сancelButton.name = setObj.name;
  сancelButton.className = 'сancelButton';
  fieldset.appendChild(сancelButton);

  return fieldset;
}

function generateSet(setObj, container) {
  // create form
  const form = document.createElement('form');
  form.name = setObj.name;
  form.className = 'setDetailsForm';
  form.onsubmit = function() {
    return false;
  };
  container.appendChild(form);

  const idInput = document.createElement('input');
  idInput.type = 'hidden';
  idInput.className = 'idInput';
  idInput.value = setObj.id;
  form.appendChild(idInput);

  // create name fieldset
  const nameFieldset = generateNameInput(setObj);
  form.appendChild(nameFieldset);

  // create terms label
  const termsWrapper = document.createElement('div');
  termsWrapper.className = 'termsWrapper';
  const labelTerm = document.createElement('label');
  const labelTextTerms = document.createTextNode('Terms:');
  labelTerm.appendChild(labelTextTerms);
  termsWrapper.appendChild(labelTerm);
  form.appendChild(termsWrapper);
  // create terms fieldsets
  if (setObj.terms) {
    for (let index = 0; index < setObj.terms.length; index++) {
      const element = setObj.terms[index];
      const input = generateTermInput(element); //{term, def}
      termsWrapper.appendChild(input);
    }
  }

  // create add new terms button
  const buttonAddNewTerm = document.createElement('button');
  buttonAddNewTerm.title = 'Add New Terms';
  const buttonText = document.createTextNode('New Term');
  buttonAddNewTerm.appendChild(buttonText);
  buttonAddNewTerm.className = 'buttonAddNewTerm';
  form.appendChild(buttonAddNewTerm);

  return form;
}

function generateTermInput(elem) {
  const fieldset = document.createElement('fieldset');
  fieldset.className = 'termsItem';

  const inputTerm = document.createElement('input');
  inputTerm.type = 'text';
  inputTerm.value = elem.term; //'Enter term'
  inputTerm.name = 'term';
  inputTerm.className = 'term';

  const inputDefinition = document.createElement('input');
  inputDefinition.type = 'text';
  inputDefinition.value = elem.definition; //'Enter definition'
  inputDefinition.name = 'definition';
  inputDefinition.className = 'definition';

  const button = document.createElement('button');
  button.name = 'buttonRemoveTerm';
  button.className = 'buttonRemoveTerm';
  const buttonText = document.createTextNode('x');
  button.appendChild(buttonText);

  fieldset.appendChild(inputTerm);
  fieldset.appendChild(inputDefinition);
  fieldset.appendChild(button);
  const br = document.createElement('br');
  fieldset.appendChild(br);

  return fieldset;
}

document.addEventListener(
  'click',
  function(event) {
    if (event.target.matches('.buttonAddNewTerm')) {
      const termsWrapper = event.target
        .closest('form')
        .getElementsByClassName('termsWrapper')[ZERO];
      const term = generateTermInput({ term: '', definition: '' });
      termsWrapper.appendChild(term);
    }

    if (event.target.matches('.buttonRemoveTerm')) {
      event.target.parentNode.remove();
      return false;
    }

    if (event.target.matches('.saveButton')) {
      const container = event.target.closest('form');
      const newSetObject = getSetData(container);
      if (newSetObject && newSetObject.name && newSetObject.name.length) {
        saveSetToLocalStorage(newSetObject);
      }

      window.location.hash = '';
    }

    if (event.target.matches('.сancelButton')) {
      window.location.hash = '';
    }

    if (event.target.matches('.addNewSet')) {
      window.location.hash = '/add';
    }
  },
  false
);

function getSetData(container) {
  const nameInput = container.querySelector('.setName');
  const name = nameInput ? nameInput.value : null;
  if (!name) {
    console.log('Name should not be empty');
    return false;
  }

  const idInput = container.querySelector('.idInput');
  const id = idInput ? idInput.value : null;

  const termsWrapper = container.querySelector('.termsWrapper');
  const terms = [];

  if (termsWrapper) {
    const termsRows = termsWrapper.querySelectorAll('.termsItem');
    for (let i = 0; i < termsRows.length; i++) {
      const termsRow = termsRows[i];
      const termInput = termsRow.querySelector('.term');
      const term = termInput ? termInput.value : null;
      const definitionInput = termsRow.querySelector('.definition');
      const definition = definitionInput ? definitionInput.value : null;

      if (term.length || definition.length) {
        terms.push({
          term: term,
          definition: definition
        });
      }
    }
  }

  return {
    id: id,
    name: name,
    terms: terms
  };
}

function saveSetToLocalStorage(newSet) {
  if (typeof newSet !== 'object' || newSet === null) {
    return false;
  }

  let retrievedSets = JSON.parse(localStorage.getItem('sets'));
  retrievedSets = retrievedSets || [];
  let filteredSets = retrievedSets.filter(function(set) {
    return set.id !== newSet.id;
  });
  filteredSets.push(newSet);
  localStorage.setItem('sets', JSON.stringify(filteredSets));
}

function getSetsFromLocalStorage() {
  return JSON.parse(localStorage.getItem('sets')) || [];
}
/// Main page

function renderSet(setObj) {
  // create form
  const wrap = document.createElement('div');
  wrap.className = 'setBlock';
  wrap.id = setObj.id;
  rootNode.appendChild(wrap);

  const name = document.createElement('h3');
  name.innerText = setObj.name;
  wrap.appendChild(name);

  const terms = document.createElement('ul');
  // create terms fieldsets
  for (let index = 0; index < setObj.terms.length; index++) {
    const termData = setObj.terms[index];
    const term = document.createElement('li');
    term.innerHTML = termData.term + ' : ' + termData.definition;
    terms.appendChild(term);
  }
  wrap.appendChild(terms);

  const button = document.createElement('button');
  button.name = 'editSet';
  button.className = 'editSet';
  button.innerHTML = 'edit';
  button.addEventListener('click', function() {
    window.location.hash = '/modify/:' + setObj.id;
  });
  wrap.appendChild(button);

  return wrap;
}

const mainPage = document.createElement('div');
mainPage.className = 'mainPage';
rootNode.appendChild(mainPage);

const addSetPage = document.createElement('div');
addSetPage.className = 'addPage';
rootNode.appendChild(addSetPage);

const editSetPage = document.createElement('div');
editSetPage.className = 'editPage';
rootNode.appendChild(editSetPage);

function navigate() {
  mainPage.innerHTML = '';
  mainPage.classList.add('hidden');
  addSetPage.innerHTML = '';
  addSetPage.classList.add('hidden');
  editSetPage.innerHTML = '';
  editSetPage.classList.add('hidden');
  if (location.hash === '#/add') {
    addSetPage.classList.remove('hidden');
    renderAddPage();
  } else if (location.hash.indexOf('/modify') > MINUS_ONE) {
    renderEditPage();
    editSetPage.classList.remove('hidden');
  } else {
    renderMainPage();
    mainPage.classList.remove('hidden');
  }
}

window.addEventListener('hashchange', navigate, false);
navigate();

function renderAddPage() {
  const retrievedSets = getSetsFromLocalStorage();
  const lastId = retrievedSets
    .map(set => +set.id)
    .sort((a, b) => a - b)
    .pop();
  generateSet({ id: lastId + 1 || 0 }, addSetPage);
}
function renderEditPage() {
  const hashArr = window.location.hash.split(':');

  if (hashArr && hashArr.length > 1) {
    const id = hashArr[1];
    const retrievedSets = getSetsFromLocalStorage();
    const curentSet = retrievedSets.filter(set => set.id === id)[ZERO];
    generateSet(curentSet, editSetPage);
  }
}
function renderMainPage() {
  const addNewSet = document.createElement('button');
  addNewSet.name = 'addNewSet';
  addNewSet.className = 'addNewSet';
  addNewSet.innerHTML = 'Add new';
  mainPage.appendChild(addNewSet);

  let retrievedSets = getSetsFromLocalStorage();
  for (let i = 0; i < retrievedSets.length; i++) {
    const set = retrievedSets[i];
    mainPage.appendChild(renderSet(set));
  }
}
