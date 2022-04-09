const app = Vue.createApp({
    // template: '<h3>I am a paragraph, aren\'t I?</h3>'
    data() {
        return {
            title: 'Book Club',
            url: "https://www.google.com",
            books: [
                {title: 'Rich Dad, Poor Dad', author: 'Robert Kiyosaki'},
                {title: 'Runner Runner', author: 'Matt Skolfgaard'},
                {title: 'Way of the wind', author: 'John Wolfgang'}
            ],
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