console.log('Budget Tracker Script Connected');

// Declare/Grab DOM Elements
const typeInput = document.getElementById('type');
const itemInput = document.getElementById('item');
const amountInput = document.getElementById('amount');
const addButton = document.getElementById('addButton');
const budgetList = document.getElementById('budgetList');

// Add Item to List
const addItem = () => {
    const itemText = itemInput.value; 
    const amountText = amountInput.value; 

    if(itemText !== '' && amountText !== '') {
        const li = document.createElement('li');
        li.textContent = `${itemText}: $${amountText}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';

        removeButton.onclick = () => {
            budgetList.removeChild(li);
        };

        li.appendChild(removeButton);
        budgetList.appendChild(li);

        itemInput.value = '';
        amountInput.value = '';
    }

};

// Add Event Listener
addButton.addEventListener('click', addItem);


