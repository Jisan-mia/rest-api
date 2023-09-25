interface Person {
  firstName: string;
  lastName: string;
}

function sayHello(p: Person): string {
  return `Hello ${p.firstName}!`;
}

const jisan: Person = {
  firstName: "Jisan",
  lastName: "Mia",
};

console.log(sayHello(jisan));
