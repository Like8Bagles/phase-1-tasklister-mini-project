document.addEventListener("DOMContentLoaded", () => {

  let list = document.getElementById('tasks');

  document.addEventListener('submit', function(e) {
    e.preventDefault()

    let taskDescription = document.getElementById('new-task-description');

    let elements = document.createElement('li');

    elements.appendChild(document.createTextNode(taskDescription.value));

    list.appendChild(elements);
    
    e.target.reset();
  })
})