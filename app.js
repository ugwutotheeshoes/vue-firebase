const app = Vue.createApp({
    // template: '<h3>I am a paragraph, aren\'t I?</h3>'
    data() {
        return {
            title: 'Element Club',
            p1: 'P1: I am a paragraph, aren\'t I?',
            p2: 'P2: Yes you are',
            p3: 'P1: If I am a paragraph, then what are you?',
            p4: 'P2: Another paragraph I guess',
            p5: 10,
            show: true
        }
    },
    methods: {
        changeTitle() {
            this.p4 = "P2: idk bro"
        },
        toggleShow(){
            this.show = !this.show
        }
    }
})

app.mount('#app')