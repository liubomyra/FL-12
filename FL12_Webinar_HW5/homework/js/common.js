const rootNode = document.getElementById('root');

const fetchUsers = function() {
  return fetch(`https://jsonplaceholder.typicode.com/users`).then(response =>
    response.json()
  );
};

const fetchUsersPosts = function(userId) {
  return fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}/posts`
  ).then(response => response.json());
};

const fetchUserComments = function(postId) {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  ).then(response => response.json());
};

function updateUser(id, params) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(params),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then(response => response.json());
}

function deleteUser(id) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'DELETE'
  }).then(response => response.json());
}

const spinner = document.createElement('div');
spinner.className = 'loader';
rootNode.appendChild(spinner);

function showSpiner() {
  spinner.classList.add('show');
}

function hideSpiner() {
  spinner.classList.remove('show');
}
