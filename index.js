const nameA = "Alpha";
const nameB = "Beta";
const nameCompared = nameA === nameB;

console.log(nameA);
console.log(nameB);
console.log(nameCompared);

const ageA = 18;
const ageB = 25;

if (ageA > ageB) {
  console.log("Si A lebih tua dibanding si B");
} else if (ageA < ageB) {
  console.log("Si A lebih unyu daripada si B");
} else {
  console.log("Mereka seumuran");
}

const personA = {
  name: "Alpha",
  age: 20
};

const personB = {
  name = "Betty",
  age: 30
}

switch (personA.age > personB.age){
  case true:
  console.log("Alpha lebih tua dibanding Betty")
  break

  case false:
  console.log("Betty lebih tua dibanding Alpha atau seumuran")
  break
  
  default:
  console.log("Alpha dan Betty lahir barengan")
}
