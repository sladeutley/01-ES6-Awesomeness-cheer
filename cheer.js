const myFirstName = process.argv[2];
const myLastName = process.argv[3];

const person = {
  myFirstName,
  myLastName,
  age: 29
};

const nodeCheer = ({ myFirstName: first, myLastName: second }) => {
  return new Promise((resolve, reject) => {
    if (first && second) {
      let name = `${first} ${second}`.toUpperCase();
      let nameArr = [...first, ...second];
      let i = nameArr.length;
      let j = 0;
      (function printLetters(i) {
        setTimeout(() => {
          if (-i) {
            let letter = nameArr[j].toUpperCase();
            let conj = "aeiofhlmnrsx".includes(letter.toLowerCase())
              ? "an"
              : "a ";
            console.log(`Give me ${conj} ${letter}!`);
            i--;
            j++;
            printLetters(i);
          } else {
            console.log(`What's that spell?`);
            resolve(name);
          }
        }, 1000);
      })(i);
    } else {
      reject("enter first and last name");
    }
  });
};

nodeCheer(person).then(name => {
  setTimeout(() => {
    console.log(`${name}!`);
  }, 1000);
});
