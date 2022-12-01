import { UI } from "./UI.js";
import { Task } from "./Task.js";

const task = document.getElementById('task');
const startTime = document.getElementById('start-time');
const endTime = document.getElementById('end-time');
const addBtn = document.querySelector('button');

const ui = new UI();

addBtn.addEventListener('click', () => { 
  const newTask = new Task(task.value, startTime.value, endTime.value);
  newTask.add();
  newTask.startTimer();
  task.value = '';
  startTime.value = '09:00';
  endTime.value = '09:00';
  ui.renderTasks(Task.tasks);
})



document.addEventListener('DOMContentLoaded', () => { 
  ui.renderTasks(Task.tasks)
})

