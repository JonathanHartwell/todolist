let task1 = {name: 'Sweep the floor', priority: 'low', status: false}

let task2 = {name: 'Get groceries', priority: 'medium', status: true}

let task3 = {name: 'Make diner', priority: 'high', status: false}

let tasks = [task1, task2, task3]

const addTask = task => {
  tasks.push(task)
}

addTask({name: 'Take out the trash', priority: 'medium', status: false})

console.log(tasks)

//write a function called deleteTask that takes a task name a parameter
//loop over and remove the task if it is in the array of tasks
//otherwise, log that task was not in the array
  
const deleteTask = task => {
  for(let i = 0; i < tasks.length; i++){
    if(task === tasks[i].name) {
      tasks.splice([i], 1)
      console.log('Task deleted')
      return
    }
  }
  
  console.log('That task was not in the array.')
}
  
deleteTask('Take out the trash')

console.log(tasks)



// const incompleteTasks = tasks.filter((task) => {
//   if(!task.status){
//     return true
//   } else {
//     return false
//   }
// })

const incompleteTasks = tasks.filter((task) => !task.status)

console.log(incompleteTasks)

// for (let i = 0; i < tasks.length; i++) {
//     let string = tasks[i]

//     if(tasks[i] === 'make dinner') {
//         string += ': Completed'
//     } else {
//         string += ': Incomplete'
//     }

//     console.log(string)
// }