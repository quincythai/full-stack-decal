// class Dog {
//   constructor(name) {
//     this.name = name;
//   }

//   bark() {
//     console.log(`${this.name} says Bark`);
//   }
// }

// d = new Dog("Bella");
// d.bark();


let myDict = {
  name: "Josh Hug",
  myFunc: function () {
    console.log(this);
  }
}

myDict.myFunc(); // you get the dictionary
// the thing before the dot is "this"

console.log(this); // Window object is THE object
// has every single thing you defined in this js file

function callMeBackWhenDone() {
  console.log('I am done.');
}

setTimeout(callMeBackWhenDone, 1000); // calls function after 1 second

setTimeout(() => { console.log('42', 1000) });

setTimeout(() => console.log('42', 1000)); // doesn't need brackets for single line

function callAfterOneSecondTwice(func) {
  setTimeout(() => {
    func(t);
    func(t);
  }, 1000);
}

callAfterOneSecondTwice((t) => {
  console.log('Hello world!', t);
});

// Promises 

// Fetch

async function main() { // async - main can use "await"

  let response = await fetch("https://zubatomic.com");
  let text = await response.text();
  console.log(text);

  // Once we receive response, parse the text, and then after you print the text

}

main();

fetch("https://zubtomic.com")
  .then(response => response.text())
  .then(text => console.log(text))
  .catch(error => console.error(error));

function callAfterASecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}