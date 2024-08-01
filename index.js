const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalElement = document.getElementById('total');
const filterSelect = document.getElementById('filter');

let expenses = [];

// Function to add an expense
function addExpense(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const category = document.getElementById('category').value;
  const date = document.getElementById('date').value;

  if (name && amount && category && date) {
    const expense = { name, amount, category, date };
    expenses.push(expense);
    updateExpenseList();
    updateTotal();
    clearForm();
  }
}

// Function to update the expense list
function updateExpenseList() {
  expenseList.innerHTML = '';

  expenses.forEach(expense => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${expense.name}</td>
      <td>${expense.amount.toFixed(2)}</td>
      <td>${expense.category}</td>
      <td>${expense.date}</td>
      <td>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </td>`
    ;
    expenseList.appendChild(row);

    // Add event listeners for edit and delete buttons
    const editBtn = row.querySelector('.edit-btn');
    const deleteBtn = row.querySelector('.delete-btn');

    editBtn.addEventListener('click', () => {
      // Implement edit functionality here
      console.log('Edit button clicked');
    });

    deleteBtn.addEventListener('click', () => {
      // Implement delete functionality here
      console.log('Delete button clicked');
      expenses = expenses.filter(item => item !== expense);
      updateExpenseList();
      updateTotal();
    });
  });
}