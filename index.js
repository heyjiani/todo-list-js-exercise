// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

// creates a new, incomplete task
function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false,

    logState: function() {
      console.log(`${task.title} has ${task.complete ? ' ' : ' not '}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// marks the provided task as completed
// function completeTask(task) {
//   task.complete = true;
// }

// // prints out the provided task's details
// function logTaskState(task) {
//   console.log(`${task.title} has ${task.complete ? ' ' : ' not '}been completed`);
// }

// // DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩  out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();

// console.log(tasks);
