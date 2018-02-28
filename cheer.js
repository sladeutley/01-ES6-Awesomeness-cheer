// const firstLetter = "S";
// process.stdout.write(`Give me an ${firstLetter}!\n`);

// let secondLetter = "l";
// process.stdout.write(`Give me an ${secondLetter}!\n`);

// let getThirdLetter = (string) => string;
// const letterObj = {
//     letter: getThirdLetter
// }
// process.stdout.write(`Give me an ${letterObj.letter("a")}!\n`);

// const newLetterObj = { getThirdLetter };
// process.stdout.write(`Give me a ${newLetterObj.getThirdLetter("d")}!\n`);

// process.stdout.write(`${firstLetter}${secondLetter}${letterObj.letter("a")}${newLetterObj.getThirdLetter("d")}!\n`);

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
