const inquirer = require("inquirer");
const connection=require("./db/connection");

function tracker() {
    inquirer.prompt ([
        {
            type: 'rawlist',
            name: 'option',
            message: 'What do you want to do?',
            choices: [
                {
                    name: "View All Departments",
                    value: "alldepartments"
                },
                {
                    name: "View All Roles",
                    value: "allroles"
                },
                {
                    name: "View All Employees",
                    value: "allemployees"
                },
            ]
        }
    ])
    .then((answer) => {
        const action = answer;
        if (action == "alldepartments"){
            allDepartments();
        } else if (action == "allroles"){
            allRoles();
        } else if (action == "allemployees"){
            allEmployees();
        }
    })
    
}

function allDepartments(){
    connection.promise().query("select * from departments")
    .then(info => {
        console.log(info);
    })
}

function allRoles(){
    connection.promise().query("select * from roles")
    .then(info => {
        console.log(info);
    })
}

function allEmployees(){
    connection.promise().query("select * from employees")
    .then(info => {
        console.log(info);
    })
}