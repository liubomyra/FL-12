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

  if (elem.folder) {
    let ul = document.createElement('ul');

    if (elem.children && elem.children.length) {
      generateItemList(ul, elem.children);
    } else {
      generateEmptyElement(ul);
    }
    li.appendChild(ul);
  }

  return li;
}

let ul = document.createElement('ul');

function generateItemList(ul, childrenList) {
  for (let index = 0; index < childrenList.length; index++) {
    let elem = childrenList[index];
    ul.appendChild(generateItem(elem));
  }
  return ul;
}

function generateEmptyElement(ul) {
  const li = document.createElement('li');
  const em = document.createElement('em');
  em.innerText = 'Folder is empty';
  li.appendChild(em);
  ul.appendChild(li);
  return ul;
}

console.log(generateItemList(ul, structure));

rootNode.appendChild(ul);

let toggler = rootNode.getElementsByTagName('a');

let i;
for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener('click', function() {
    this.parentNode.classList.toggle('open');
    return false;
  });
}
