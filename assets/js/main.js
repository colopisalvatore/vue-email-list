const { createApp } = Vue;

createApp({
    data() {
        return {
            rndEmails: []
        }
    },
    created() {
        this.genMail();
    },
    methods: {
        test() {
            this.console.log(message);
        },
        genMail() {
            for (let i = 0; i < 10; i++) {
                axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((serverMsg)=>{
                        this.rndEmails.push(serverMsg.data.response);
                })
            }
        }
    }
}).mount("#app");