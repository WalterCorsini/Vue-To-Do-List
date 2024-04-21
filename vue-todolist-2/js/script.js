const { createApp } = Vue;
createApp({
    data() {
      return {
        newTodo:{
            text: "",
            done: false,
        },
        todoList:[ 
        ],
      }
    },
    created(){
        // pass the values ​​found in local memory into a variable
        localTodo = localStorage.getItem("task");
        // check if variable is not empty
        if(localTodo !== null){
            // save the values ​​found in local memory in my object array
            this.todoList = JSON.parse(localTodo);
        }
    },
    methods:{
        addTodo:function(){
            // check that the key of the new task is not empty
            if(this.newTodo.text !== ""){
            // copy oobject with spread operator
            const newObject = {...this.newTodo};
            // push the new task on my item list
            this.todoList.push(newObject);
            // empty the newTodo test key
            this.newTodo.text= "";
            // create a variable and save my array by transforming it into a string
            const jasonTodo = JSON.stringify(this.todoList);
            // save the newly created variable in local memory
            localStorage.setItem("task", jasonTodo);            
            };
        },
        deleteTodo: function(i){
            this.todoList.splice(i,1);
            // create a variable and save my array by transforming it into a string
            const jasonTodo = JSON.stringify(this.todoList);
            // save the newly created variable in local memory
            localStorage.setItem("task", jasonTodo);    
        }
    }
  }).mount('.container')