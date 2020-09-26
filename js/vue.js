Vue.component('timer', {
    data: function() {
        return {
            start: 0,            
            goId: null,
            playShow: true,
            pauseShow: false,
        }                        
    },    
    methods: {        
        play: function () {
            this.playShow = false;
            this.pauseShow = true;
            this.goId = setInterval(() => {
                this.start++;
            }, 1000);           
        },
        pause: function () {
            this.playShow = true;
            this.pauseShow = false;            
            clearInterval(this.goId);
        },
        stop: function () {
            this.playShow = true;
            this.pauseShow = false;
            clearInterval(this.goId);
            this.start = 0;
        }
    },
    template: '<div class="timers__timer timer"><div class="timer__time" v-bind:class="{ white: pauseShow }"><p class="timer__number">{{ Math.floor(start / 60 / 60) }}:{{ Math.floor(start / 60) - (Math.floor(start / 60 / 60) * 60) }}:{{ start % 60 }}</p></div><div class="timer__play-stop" v-bind:class="{ white: pauseShow }"><div class="timer__play" v-if="playShow" v-on:click="play"><figure class="timer__img"><img src="img/треугольник.svg" alt="старт"></figure></div><div div class= "timer__pause" v-if="pauseShow" v-on:click="pause"><figure class="timer__img"><img src="img/Пауза.svg" alt="пауза"></figure></div><div class="timer__stop" v-on:click="stop"><figure class="timer__img"><img src="img/квадрат.svg" alt="стоп"></figure></div></div></div > '
})

var app = new Vue({
    el: '#app',
    data: {
        timers: []
    },
    methods: {
        add: function () {
            this.timers.push('')
        },
    }
})