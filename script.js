// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

//Global employees array
let employees = []

// Collect employee data
const collectEmployees = function() {
  
  // Prompts for user input
  do {
  let firstNameInput = window.prompt("Enter first name:");
  let lastNameInput = window.prompt("Enter last name");
  let salaryInput = window.prompt("Enter salary");

  // Default salary to zero if invalid response is given and convert string to number if response is valid
    if (isNaN(salaryInput)) {
      salaryAsNumber = 0
    } else {
      salaryAsNumber = Number(salaryInput)
    };
  
  // Build object from input
  let employee = {
    firstName: firstNameInput,
    lastName: lastNameInput,
    salary: salaryAsNumber
  };

  // Push object to "employees" array
  employees.push(employee);

  addAnotherEmployee = window.confirm("Add another employee?");
  // do-while loop continues when user selects OK to prompt and ends when canceled
  } while (addAnotherEmployee == true); 

  return (employees);
}


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // Total the salaries, I used https://www.freecodecamp.org/news/how-to-add-numbers-in-javascript-arrays/ as a reference.
  let salarySum = 0;
  for (i = 0; i < employeesArray.length; i++){
    salarySum += employeesArray[i].salary
  }

  //Console log average salary message (computation of average is completed within the template literal)
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${salarySum/employeesArray.length}`)
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // Generate a random integer within the bounds of the number of employees
  const x = Math.floor(Math.random() * (employeesArray.length - 1));

  // Console log a congradulations message with a template literal using the random integer to select a random employee
  console.log(`Congrats, ${employeesArray[x].firstName} ${employeesArray[x].lastName} on winning our employee sweepstakes!!`)

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
