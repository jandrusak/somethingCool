let employee1 = {
  name: "Alex",
  sales: 900,
  clearance: 1,
  location: "home",
};

let employee2 = {
  name: "Jon",
  sales: 3000,
  clearance: 4,
  location: "hybrid",
};

let employee3 = {
  name: "Andre",
  sales: 69,
  clearance: 2,
  location: "office",
};

let employee4 = {
  name: "Xander",
  sales: 1000,
  clearance: 3,
  location: "hybrid",
};

let employee5 = {
  name: "Rachel",
  sales: 1,
  clearance: 5,
  location: "office",
};

let employees = [];
employees.push(employee1);
employees.push(employee2);
employees.push(employee3);
employees.push(employee4);
employees.push(employee5);

const topDogs = employees.filter((employee) => employee.sales > 500);

for (let i = 0; i < topDogs.length; i++) {
  console.log("Congrats " + topDogs[i].name);
}
