new Vue({
    el: '#app',
    data: {
        name: 'Vue!',
        counter: 0,
        title: 'Счетчик',
        isActive: false
    },
    methods: {
        changeName: function(e) {
            this.name = e.target.value;
        },
        riseCounter: function(num, str, e) {
            this.counter += num;
            this.title = str;
            if(num === 5) {
                e.target.style.color = 'blue';
            } else if(num === 10) {
                e.target.style.color = 'red';
            }
        },
        hoverOver: function(e) {
            e.target.style.color = 'red';
        },
        alertValue: function(e) {
            alert(e.target.value);
        }
    }
});
