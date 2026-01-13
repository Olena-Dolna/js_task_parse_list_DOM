'use strict';

const employees = Array.from(document.querySelectorAll('li'));
const employeesSorted = getEmployees(sortList(employees));

const employeesHTML = employeesSorted.map(
  (person) =>
    `<li data-position=${person.position} data-salary=${person.salary} data-age=${person.age}>${person.name}</li>`,
);

const listWrapper = document.querySelector('ul');

listWrapper.innerHTML = employeesHTML.join('');

function sortList(list) {
  return list.sort(
    (firstItem, secondItem) =>
      parseFloat(secondItem.dataset.salary.slice(1)) -
      parseFloat(firstItem.dataset.salary.slice(1)),
  );
}

function getEmployees(list) {
  return list.map((employee) => ({
    name: employee.textContent,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

// write code here
