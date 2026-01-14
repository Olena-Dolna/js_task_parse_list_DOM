'use strict';

const employees = Array.from(document.querySelectorAll('li'));

sortList(employees);
getEmployees(employees);

function sortList(list) {
  list.sort(
    (firstItem, secondItem) =>
      getSalary(secondItem.dataset.salary) -
      getSalary(firstItem.dataset.salary),
  );

  const listWrapper = document.querySelector('ul');
  const employeesHTML = list.reduce(
    (addedLines, employee) =>
      addedLines +
      `<li data-position=${employee.dataset.position} data-salary=${employee.dataset.salary} data-age=${employee.dataset.age}>${employee.textContent}</li>`,
    '',
  );

  listWrapper.innerHTML = employeesHTML;
}

function getEmployees(list) {
  return list.map((employee) => ({
    name: employee.textContent,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

function getSalary(salary) {
  return parseFloat(salary.slice(1));
}

// write code here
