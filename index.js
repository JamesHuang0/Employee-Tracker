const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');
require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'employeeDB',
});

connection.connect(err => {
    if (err) throw err;
    homeScreen();
});

function homeScreen() {
    inquirer.prompt({
        type: 'list',
        name: 'startScreen',
        message: 'What would you like to do?',
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
    })

    .then(function(choice) {
        switch (choice.option) {
            case "View all departments":
                viewDep();
                break;
            case "View all roles":
                viewRoles();
                break;
            case "View all employees":
                viewEmp();
                break;
            case "Add a department":
                addDep();
                break;
            case "Add a role":
                addRole();
                break;
            case "Add an employee":
                addEmp();
                break;
            case "Update an employee role":
                updateEmp();
                break;
        }
    });
}

// All functions

function viewDep() {
    let query = "SELECT * FROM department";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    homeScreen();
  });
}

function viewRoles() {
    let query = "SELECT * FROM role";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    homeScreen();
  });
}

function viewEmp() {
    let query = "SELECT * FROM employee";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    homeScreen();
  });
}

function addDep() {
    inquirer.prompt({
        type: "input",
        name: "depName",
        message: "What is the name of the department?",
    }).then(function(answer) {

        connection.query("INSERT INTO department (name) VALUES (?)", [answer.depName], function(err, res) {
            if (err) throw err;
            console.table(res)
            homeScreen();
        })
    })
}

function addRole() {
    inquirer.prompt([
        {
          type: "input",
          name: "roleName",
          message: "What's the name of the role?",
        },
        {
          type: "input",
          name: "roleSalary",
          message: "What is the salary for this role?",
        },
        {
          type: "input",
          name: "depID",
          message: "What is the department id number?",
        }
      ])
      .then(function(answer) {
  
        connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.roleName, answer.salaryTotal, answer.depID], function(err, res) {
            if (err) throw err;
            console.table(res);
            homeScreen();
        });
      });
}

function addEmp() {
    inquirer.prompt([
        {
          type: "input",
          name: "empFirstName",
          message: "What's the first name of the employee?",
        },
        {
          type: "input",
          name: "empLastName",
          message: "What's the last name of the employee?",
        },
        {
          type: "input",
          name: "roleID",
          message: "What is the employee's role id number?",
        },
        {
          type: "input",
          name: "managerID",
          message: "What is the manager id number?",
        }
      ])
      .then(function(answer) {
        
        connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.empFirstName, answer.empLastName, answer.roleID, answer.managerID], function(err, res) {
            if (err) throw err;
            console.table(res);
            homeScreen();
        });
      });
}

function updateEmp() {
    inquirer.prompt([
        {
          type: "input",
          name: "empUpdate",
          message: "Enter the first name of the employee you would like to update:",
        },
        {
          type: "input",
          name: "updateRole",
          message: "Enter the ID number of this employee's new role:",
        }
      ])
      .then(function(answer) {
  
        connection.query('UPDATE employee SET role_id=? WHERE first_name= ?',[answer.updateRole, answer.empUpdate], function(err, res) {
            if (err) throw err;
            console.table(res);
            homeScreen();
        });
      });
}