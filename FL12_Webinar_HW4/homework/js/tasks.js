// task 1
const array1 = [1, 2, 3, 4, 56, 7, 8, 76, 5, 241, 5, 356, 567, 2];

maxElement = arr => Math.max(...arr);
console.log(maxElement(array1));

// task 2
const array2 = [1, 2, 3];
copyArray = arr => [...arr];
const copiedArray = copyArray(array2);
console.log(array2, copiedArray);
console.log(array2 === copiedArray);

// task 3
const obj1 = { name: 123 };

addUniqueId = obj => {
  let id = Symbol('id');
  return { [id]: 1, ...obj };
};

addUniqueId(obj1);
console.log(addUniqueId(obj1));
console.log(obj1);

// task 4
const oldObj1 = {
  name: 'Someone',
  details: { id: 1, age: 11, university: 'UNI' }
};

regroupObject = oldObj => {
  const { name: firstName, details } = oldObj;
  const { id, age, university } = details;

  return {
    university,
    user: {
      age,
      firstName,
      id
    }
  };
};

console.log(regroupObject(oldObj1));

// task 5
const array5 = [1, 1, 23, 3, 4, 5, 6, 5, 4, 23, 2, 1, 1, 1, 1, 1];

findUniqueElements = arr => [...new Set(arr)];
console.log(findUniqueElements(array5));

// task 6
const phoneNumber = '0123456789';
hideNumber = numberString => {
  res = numberString.slice(-4);
  return res.padStart(numberString.length, '**********');
};
console.log(hideNumber(phoneNumber));

// task 7
function required() {
  throw new Error('Missing property');
}
const add = (a = required(), b = required()) => {
  return a + b;
};
//add(1, 3); // working
//add(1); // error

// task 8
const fetchPromise = fetch('https://api.github.com/users/liubomyra/repos');
fetchPromise
  .then(response => {
    return response.json();
  })
  .then(repos => {
    const names = repos.map(({ name }) => name).sort();
    console.log(names);
  });

// task 9
async function getReposAsync(name) {
  let response = await fetch(`https://api.github.com/users/${name}/repos`);
  let data = await response.json();
  return data;
}

getReposAsync('liubomyra').then(repos => {
  const names = repos.map(({ name }) => name).sort();
  console.log(names);
});
