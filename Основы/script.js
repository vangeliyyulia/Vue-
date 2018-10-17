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

var vue1 = new Vue ({
    el: '#app2',
    data: {
        title: 'Hello I am Vue!'
    }
});

new Vue ({
    el: '#app3',
    data: {
        title: 'Hello from Vue 2',
        name: 'Change me'
    },
    methods: {
        updateFirstTitle: function() {
            vue1.title = 'Updated from the Second App'
        },
        updateName: function() {
            this.name = 'New Title!';
            this.$refs.heading.style.color = 'red';
        }
    }
});

Vue.component('my-counter', {
    template: `
        <div style="border: 1px solid black; padding: 10px">
            <h2>Counter: {{ counter }}</h2>
            <button @click="add">Add to counter</button>
        </div>
    `,
    data: function() {
        return {
            counter: 0
        }
    },
    methods: {
        add: function() {
            this.counter++;
        }
    }
});

new Vue ({
    el: '#app4'
})
