// Global filter, format date
// Vue.filter('dateFormat', function(dateStr) {
//     // Get date object 
//     var dt = new Date(dateStr);
//     // Date format: yyyy-MM-dd
//     var y = dt.getFullYear();
//     var m = dt.getMonth() + 1;
//     var d = dt.getDate();
//     // return y + "-" + m + "-" + d;
//     return `${y}-${m}-${d}`;
// });
// All the vm instance can share this filter. 
Vue.filter('dateFormat', function(dateStr, pattern="") {
    var dt = new Date(dateStr);
    var y = dt.getFullYear();
    var m = (dt.getMonth() + 1).toString().padStart(2, '0');
    var d = dt.getDate().toString().padStart(2, '0');

    if(pattern && pattern.toLowerCase() === 'yyyy-mm-dd') {
        return `${y}-${m}-${d}`;
    } else {
        // Fill extra 0s for the string.
        var hh = dt.getHours().toString().padStart(2, '0');;
        var mm = dt.getMinutes().toString().padStart(2, '0');;
        var ss = dt.getSeconds().toString().padStart(2, '0');;
        return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
    }
});

// Custom Keyboard identifier - query the keycode of keyboard element. 
Vue.config.keyCodes.f2=113;

// Custom Directives - Global
/**
 * @arg1: Directive name, no starting with v-
 * @arg2: 
 */
Vue.directive(
    'focus', {
        // @param: el: dom element
        bind: function(el) { // bind element, not in dom yet. 
            el.focus(); // not working.
        },
        inserted: function(el) { // inserted element to dom, call the function
            el.focus();
        }, 
        updated: function() { // VNode updates, execute update one or more times.

        }
    }
);

var vm = new Vue({
    el: '#app',
    data: {
        id:'',
        name: '',
        keywords: '',
        list: [
            {id: 1, name: 'Merceden Ben', ctime: new Date()},
            {id: 2, name: 'BMW', ctime: new Date()}
        ]
    }, 
    methods: {
        add() {
            var prod = {id : this.id, name : this.name, ctime : new Date()};
            this.list.push(prod);
            this.id = "";
            this.name = "";
        },
        del(id) {
            // this.list.some((item, i) => {
            //     if(item.id == id) {
            //         this.list.splice(i, 1);
            //         return true;
            //     }
            // });
            var index = this.list.findIndex(item => {
                if(item.id == id) {
                    return true;
                }
            });
            this.list.splice(index, 1);
        },
        search(keywords) {
            console.log("Search");
            return this.list.filter(item => {
                if(item.name.includes(keywords)) {
                    return item;
                }
            });
        }
    }
});

