let users = [];
showSpiner();

fetchUsers().then(response => {
  hideSpiner();
  users = response;

  renderUsers();
});

function renderUsers() {
  let usersWrapper = document.createElement('div');
  usersWrapper.className = 'allUsers';

  const ul = document.createElement('ul');
  for (let i = 0; i < users.length; i++) {
    let li = document.createElement('li');
    let user = generateUser(users[i]);
    li.appendChild(user);
    ul.appendChild(li);
    usersWrapper.appendChild(ul);
  }
  rootNode.appendChild(usersWrapper);
}

function generateUser(user) {
  let div = document.createElement('div');
  div.setAttribute('data-id', user.id);
  div.className = 'user';

  let header = document.createElement('h1');
  let a = document.createElement('a');
  a.className = 'userName';
  a.href = `post.html?id=${user.id}`;
  a.title = user.name;
  a.innerText = user.name;
  header.appendChild(a);
  div.appendChild(header);

  let form = document.createElement('form');

  form.name = user.name;
  form.className = 'UserForm';
  form.onsubmit = function() {
    return false;
  };

  for (let [key, value] of Object.entries(user)) {
    const myFieldset = generateUserField(key, value);
    console.log(myFieldset);
    form.appendChild(myFieldset);
  }
  div.appendChild(form);

  let deleteButton = document.createElement('button');
  deleteButton.name = user.name;
  deleteButton.className = 'buttonDeleteUser';
  let buttonText = document.createTextNode('Delete User');
  deleteButton.appendChild(buttonText);
  div.appendChild(deleteButton);

  return div;
}

function generateUserField(key, value) {
  let fieldset = document.createElement('fieldset');
  let labelName = document.createElement('label');
  let labelText = document.createTextNode(key);
  labelName.appendChild(labelText);
  fieldset.appendChild(labelName);

  if (typeof value === 'object' && value !== null) {
    let div = document.createElement('div');
    for (let [keyInner, valueInner] of Object.entries(value)) {
      const myFieldset = generateUserField(keyInner, valueInner);
      div.appendChild(myFieldset);
    }
    fieldset.appendChild(div);
  } else {
    let input = document.createElement('input');
    input.type = 'text';
    input.name = key;
    input.value = value;
    fieldset.appendChild(input);

    let saveButton = document.createElement('input');
    saveButton.type = 'submit';
    saveButton.value = 'Save changes';
    saveButton.name = key;
    saveButton.className = 'saveButton';
    fieldset.appendChild(saveButton);

    let сancelButton = document.createElement('input');
    сancelButton.type = 'submit';
    сancelButton.value = 'Сancel';
    сancelButton.name = key;
    сancelButton.className = 'сancelButton';
    fieldset.appendChild(сancelButton);
  }

  return fieldset;
}

document.addEventListener(
  'click',
  function(event) {
    if (event.target.matches('.buttonDeleteUser')) {
      showSpiner();
      const id = event.target.closest('.user').getAttribute('data-id');

      deleteUser(id).then(() => {
        debugger;
        hideSpiner();
        let indexRemoveUser = users.findIndex(user => +user.id === +id);
        users.splice(indexRemoveUser, 1);
      });
      return false;
    }

    if (event.target.matches('.saveButton')) {
      const id = event.target.closest('.user').getAttribute('data-id');
      const key = event.target
        .closest('fieldset')
        .getElementsByTagName('input')[0].name;
      const value = event.target
        .closest('fieldset')
        .getElementsByTagName('input')[0].value;
      let params = { key: value };
      //if () {
      updateUser(id, params);
      //}
    }

    if (event.target.matches('.сancelButton')) {
      renderUsers();
    }
  },
  false
);
