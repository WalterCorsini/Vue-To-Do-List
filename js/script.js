
const { createApp } = Vue;
const app = createApp({
    data(){
        
        return{
            done: "done",
            todo: [
            {text: "Recruiting blog post", done: true},
            {text: "Mobile app luaunch", done: false},
            {text: "Interview John H.", done: false},
            {text: "Summit update to mobile storefronts", done: true},
            ]
        };
    },
}).mount("#app");
