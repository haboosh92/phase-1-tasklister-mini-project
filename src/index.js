document.addEventListener("DOMContentLoaded", () => {
  //your code goes here 
  const form = document.querySelector('form');
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const task = document.getElementById('new-task-description');
    const textValue =task.value;
    const priorety = document.getElementById('priorety');
    const prioretyVal= priorety.options[priorety.selectedIndex].text;
    addTask(textValue,prioretyVal);
  })
});



function getColor(value){
  if(value === 'high'){
    return 'red';
  }
  if(value=== 'medium'){
    return 'yellow';
  }
  if(value === 'low'){
    return 'green';
  }
}

function addTask(task,priority){
  const listElement = document.createElement('li');
  listElement.innerText = task;
  listElement.style.backgroundColor = getColor(priority);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML=' <i class="fa fa-trash" ></i>'
  deleteBtn.addEventListener('click',(e)=>{
    e.target.parentNode.parentNode.remove();
  })
  
  listElement.appendChild(deleteBtn);
  const tasks = document.getElementById('tasks');
  tasks.appendChild(listElement);
}