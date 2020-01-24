const structure = [
  {
    folder: true,
    title: 'Films',
    children: [
      {
        title: 'Iron Man.avi'
      },
      {
        folder: true,
        title: 'Fantasy',
        children: [
          {
            title: 'The Lord of the Rings.avi'
          },
          {
            folder: true,
            title: 'New folder 1',
            children: false
          }
        ]
      }
    ]
  },
  {
    folder: true,
    title: 'Documents',
    children: [
      {
        folder: true,
        title: 'EPAM Homework answers',
        children: null
      }
    ]
  }
];

const rootNode = document.getElementById('root');

function generateItem(elem) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  const i = document.createElement('i');

  a.href = '#';
  a.title = elem.title;
  a.innerText = elem.title;

  if (elem.folder) {
    i.className = 'material-icons folder';
  } else {
    i.className = 'material-icons file';
  }
  li.appendChild(a);
  a.prepend(i);

  if (elem.folder && (elem.children === false || elem.children === null)) {
    const em = document.createElement('em');
    em.innerText = 'Folder is empty';
    li.appendChild(em);
  }

  if (elem.children && elem.children.length) {
    let ul = document.createElement('ul');
    ul.className = 'nested';
    generateItemList(ul, elem.children);
    li.appendChild(ul);
  }

  return li;
}

//console.log(generateItem(structure[0]));

let ul = document.createElement('ul');
ul.className = 'listFolder';

function generateItemList(ul, childrenList) {
  for (let index = 0; index < childrenList.length; index++) {
    let elem = childrenList[index];
    ul.appendChild(generateItem(elem));
  }
  return ul;
}

console.log(generateItemList(ul, structure));

rootNode.appendChild(ul);

// let toggler = document.getElementsByClassName('.material-icons.folder');
// let i;

// for (i = 0; i < toggler.length; i++) {
//   toggler[i].addEventListener('click', function() {
//     this.parentElement.querySelector('.nested').classList.toggle('active');
//     this.classList.toggle('li.open .material-icons.folder');
//   });
// }
