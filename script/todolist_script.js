/***===========Function to add TODO list==============*****/

const todoArray = JSON.parse(localStorage.getItem('todolist')) || [];

    renderOnPage();

    function getTodo(){
        const todoValue = document.querySelector('.todo__input');
        const dateValue = document.querySelector('.duedate');
        
        const todoInput = todoValue.value;
        const dueDate = dateValue.value;

        if(!todoInput || !dueDate){
            alert('Enter a valid Todo list')
            
            todoInput = todoValue.value;
            dueDate = dateValue.value;
        }
        else{
            todoArray.push([
                
                /*todoInput: todoinput,
                  dueDate: dueDate */

                todoInput, //Shorthand property. yes, that is a shortcut!!!
                dueDate,
            ]);
    
            console.log(todoArray);
            renderOnPage();

            todoValue.value = '';
        }


    }
    /***===========Function to add TODO list on Page==============*****/

    function renderOnPage(){
        let onPage = '';
        for(let i = 0; i< todoArray.length; i++){
            const todoObject = todoArray[i];
            // const todoInput = todoObject.todoInput;
            // const dueDate = todoObject.dueDate;

            const [todoInput, dueDate] = todoObject; //Shortcut!!

            const html = `
            <div>${todoInput}</div>
            <div>${dueDate}</div>
            <button onclick = "
            removeStorage(${i});
            renderOnPage();
            ">Delete</button>`;
            saveStorage();
            onPage += html;
        }
        document.querySelector('.onpage').
            innerHTML = onPage;
    }

    
    /***===========Function Runs keyboard Click==============*****/

    function onPress(event){
        if(event.key === 'Enter'){
            getTodo();
        }
    }

    /*============= To store results=======================*/

    function saveStorage(){
        localStorage.setItem('todolist',JSON.stringify(todoArray));
    }


    /*============= To store results=======================*/

    function removeStorage(i){
        todoArray.splice(i,1);
        localStorage.removeItem('todolist');
    }