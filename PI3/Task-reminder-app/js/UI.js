export class UI {
	renderTasks(taskArr) {
		const taskTable = document.getElementById("task-table");
		if (taskArr.length == 0) {
			taskTable.innerHTML = `
         <tr>
          <th>#</th>
          <th>Task</th>
          <th>Start Time</th>
          <th>End Time</th>
         </tr>
          <tr>
           <td colspan="4" class="text-center"> No Upcoming Tasks</td>
        </tr>
      `;
		} else {
			taskTable.innerHTML = `
        <tr>
          <th>#</th>
          <th>Task</th>
          <th>Start Time</th>
          <th>End Time</th>
         </tr>
      `;

			taskTable.innerHTML += taskArr
				.map(
					(task, index) => `
          <tr>
          <td>${index + 1}</td>
          <td>${task.name}</td>
          <td>${task.start_time}</td>
          <td>${task.end_time}</td>
         </tr>
      
      `
				)
				.join("");
		}
  }
  

  TaskModal(task) { 

    const modal = document.getElementById('my-modal');
    const modalBtn = document.getElementById('modal-btn');

    modal.innerHTML = `   
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">${task.name}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Start Time : ${task.start_time}</p>
          <p>End Time : ${task.end_time}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>`;

    modalBtn.click();
  }
}
