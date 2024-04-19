
const { createApp } = Vue;
const app = createApp({
    data(){
        return{
            done: "done",
            inputUser: "",
            newTodo:{text:"",done:true},
            todo: [
            {text: "Recruiting blog post", done: true},
            {text: "Mobile app luaunch", done: false},
            {text: "Interview John H.", done: false},
            {text: "Summit update to mobile storefronts", done: true},
            ]
        };
    },
    methods: {
        addTodo: function(){
            if(this.inputUser !== ""){
            this.newTodo.text = this.inputUser;
            this.todo.push({...this.newTodo});
            this.newTodo.text = "";
            this.inputUser = "";
            }
        }
    },
}).mount("#app");