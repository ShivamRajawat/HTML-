document.getElementById('submit').addEventListener('click', function () {
    const nameInput = document.getElementById('Text');
    const name = nameInput.value.trim();
    
    if (name) {
        const list = document.getElementById('list');
        const listItem = document.createElement('li');
        listItem.textContent = name;
        list.appendChild(listItem);
        
        nameInput.value = ''; // Clear input after adding
    }
});