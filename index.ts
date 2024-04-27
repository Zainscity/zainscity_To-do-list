// #! /usr/bin/env

import inquirer from "inquirer";
let todo = [];
let condition = true;
let exit;
while (exit != "Exit"){

let options = await inquirer.prompt([
    {
        type: "list",
        name:"List",
        message: "What operation would you like to do?",
        choices: ['Add to list','Add more', 'Delete from list','Show list','Update list','Exit']
    }
])

// Add
    if (options.List == "Add to list"){
while(condition){
  let question = await inquirer.prompt([
    {name:"q1",
    type: "input",
    message: "Enter task"
    },
    {name:"q2",
    type: "confirm",
    message: "Would you like to add more?",
    default: true
    }
  ])
  todo.push(question.q1)
condition = question.q2
}};
// Add more
if (options.List == "Add more"){
  let addmore = await inquirer.prompt([
    {name:"q1",
    type: "input",
    message: "Enter task"
    }])
    todo.push(addmore.q1);
    console.log('Task added successfully')
  };

// Show list
if (options.List == "Show list"){
if (todo.length >0){
  console.log(todo)
}
else{console.log('Your To-do list is empty')}
};

// Delete
if (options.List == "Delete from list"){
  if (todo.length >0){
    let deletetask = await inquirer.prompt([
      {
        name:"del",
        type:"list",
        message:"What would you like to delete?",
        choices:todo
    }])
    let deleted = todo.indexOf(deletetask.del)
    todo.splice(deleted,1);
    console.log('Task deleted')
  }
  else{console.log('Your To-do list is empty')}
}
// Update list
if (options.List == "Update list"){
    let update = await inquirer.prompt([
      {name:"q1",
      type: "list",
      message: "What would you like to update?",
      choices:todo
      },
      {name:"q2",
      type: "input",
      message: "Enter Task"
      }
    ])
let updatetask = todo.findIndex(task => task === update.q1);
todo.splice(updatetask,1,update.q2);
console.log('Task updated successfully') 
  }
  
if (options.List == "Exit"){
  exit="Exit"
  console.log("You've successfully exited")
}


}