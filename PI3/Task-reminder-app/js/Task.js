import { UI } from "./UI.js";

export class Task{
  static tasks = [];
 
  constructor(name, start_time, end_time) {
   this.id = Date.now();
   this.name = name;
   this.start_time = start_time; 
   this.end_time = end_time; 
   this.timerId = null;
  }

  add() { 
    Task.tasks.push(this)
  }

  startTimer() { 
    let show = false
    this.timerId = setInterval(() => { 
      if (this.start_time === this.getCurrentTime()) { 
        if (!show) { 
        const ui = new UI();
				ui.TaskModal(this);
          show = true;
        }
      }
    }, 1000)
  }


  clearTimer() { 
    clearInterval(this.timerId)
  }
  


  getCurrentTime() { 
    const currentTime = new Date();
		let time = currentTime.toLocaleTimeString("en-US", { hour12: false });
    time = time.slice(0, 5);
    return time;
  }
}