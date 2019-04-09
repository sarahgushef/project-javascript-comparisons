const nameA = "Alpha";
const nameB = "Beta";
const nameCompared = nameA === nameB;

console.log(nameA);
console.log(nameB);
console.log(nameCompared);

//==================================
const ageA = 18;
const ageB = 25;

// if else style
if (ageA > ageB) {
  console.log("Si A lebih tua dibanding si B");
} else if (ageA < ageB) {
  console.log("Si A lebih unyu daripada si B");
} else {
  console.log("Mereka seumuran");
}

// Ternary style
var AOlderThanB = ageA > ageB ? true : false;
console.log(AOlderThanB);

// ===================================
const personA = {
  name: "Alpha",
  age: 20
};

const personB = {
  name: "Betty",
  age: 30
};

switch (personA.age > personB.age) {
  case true:
    console.log("Alpha lebih tua dibanding Betty");
    break;

  case false:
    console.log("Betty lebih tua dibanding Alpha atau seumuran");
    break;

  default:
    console.log("Alpha dan Betty lahir barengan");
}

/*
NOTES:
============================
var with the same name can be redefined, and let CANNOT be redefined

example:
var name;
var name;
var name;

will not error

example 2:
let name;
let name

error, because it defined more than 1
*/
