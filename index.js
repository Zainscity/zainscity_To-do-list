// #! /usr/bin/env 
import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let todos = await inquirer.prompt([{
            type: "input",
            message: "What needs to be done?",
            name: "todo"
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more?",
            default: "false"
        }]);
    todo.push(todos.todo);
    condition = todos.addmore;
    console.log(todo);
}
