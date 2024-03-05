// Get references to elements
const addTaskButton = document.querySelector('.add-task');
const clearListButton = document.querySelector('.clear-list');
const taskList = document.querySelector('.task-list');

// Add task functionality
addTaskButton.addEventListener('click', () => {
  // Prompt for new task description
  const newTaskDescription = prompt("Enter a new task:");

  // Check if description entered
  if (newTaskDescription) {
    // Create new list item element
    const newTaskItem = document.createElement('li');

    // Create checkbox element
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Create label element (optional)
    const label = document.createElement('label');
    label.textContent = newTaskDescription;

    // Append checkbox and label to list item
    newTaskItem.appendChild(checkbox);
    newTaskItem.appendChild(label);

    // Add new list item to task list
    taskList.appendChild(newTaskItem);
  } else {
    // Handle empty description
    alert("Please enter a task description.");
  }
});

// Clear list functionality
clearListButton.addEventListener('click', () => {
  // Improved confirmation message with accurate task count
  const hasTasks = taskList.querySelectorAll('li').length > 0;
  const confirmationMessage = hasTasks
    ? `Are you sure you want to clear the list? This will remove ${taskList.querySelectorAll('li').length} task(s).`
    : "The list is already empty.";

  const confirmation = confirm(confirmationMessage);

  if (confirmation) {
    // Clear the list
    taskList.innerHTML = '';
  }
});
