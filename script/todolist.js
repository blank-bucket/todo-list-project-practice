/***===========Function to add TODO list==============*****/
const todoArray = [];
function addTodoList(){
    
    const jsInputElement = document.querySelector('.js-input-value');
    const todoDate = document.querySelector('.todo__date');
    
        const inputValue = jsInputElement.value;
        const dueDate = todoDate.value;

        if(!inputValue || !dueDate){

            console.log('Enter a Valid Todo');
            alert('Enter a Valid Todo or Due Date');
            return;
            
        }
        else if(inputValue && dueDate){

        todoArray.push({
            // inputValue: inputValue,
            // dueDate: dueDate,
    
            inputValue,
            dueDate,     //Shorthand property yes, that is a shortcut!!!
        });


        console.log(todoArray);

        jsInputElement.value = '';
        renderTodoOnPage();
    }

}
/***===========Function to add TODO list on Page==============*****/

function renderTodoOnPage(){
    let html = '';

    for(let i = 0; i<todoArray.length; i++){
        const todoObject = todoArray[i];
        // const inputValue = todobject.inputValue;
        // const dueDate = todoObject.duedate; 
        const {inputValue,dueDate} = todoObject; //Shortcut!!


            const addHTML = `
            <div>${inputValue}</div>
            <div>${dueDate}</div> 
            <button onclick = "
            todoArray.splice(${i},1);
            renderTodoOnPage();
            " class="style__delete__button">Delete</button>`;
            html += addHTML;
    }
    document.querySelector('.onpage__html')
    .innerHTML = html;
}


/***===========Function Runs keyboard Click==============*****/

function onPress(event){
    if(event.key === "Enter")
    addTodoList();
}
