const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const button = document.querySelector("#suggestion-button");
const suggestionStatus = document.querySelector("#suggestion-status");
const simulateError = document.querySelector("#simulate-error");

const DELAY = 1000;


const onCreateTaskItem = (text) => {
    const item = document.createElement('li');
    item.textContent = text;
    taskList.append(item);
    taskInput.value = "";
    taskInput.focus();
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = taskInput.value.trim();

    if(!text) return;
    
    onCreateTaskItem(text);
})

const getSuggestion = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           simulateError.checked ? reject('Подсказка недоступна') : resolve("Повторить Javascript!");   
        }, DELAY)
    })
}

button.addEventListener('click', async () => {
    button.disabled = true;
    suggestionStatus.textContent = 'Ждем подсказку...';
    try {
        taskInput.value = await getSuggestion();
         suggestionStatus.textContent = '';
    } catch(err) {
        suggestionStatus.textContent = 'Подсказка недоступна'
    } finally {
        button.disabled = false;
    }
     
})