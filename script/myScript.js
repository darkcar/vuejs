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
// JS related, add operation to inserted;
// CSS related, add to bind. 
/**
 * @arg1: Directive name, no starting with v-
 * @arg2: 
 */
Vue.directive(
    'focus', {
        // @param: el: style binds to element, it already tied to the inline style.
        // Browser render engine will display the inline color. 
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

/**
 * v-color: set font color to red
 */
Vue.directive(
    'color', {
        bind: function(el, binding) {
            // binding the color 
            el.style.color = binding.value;
        },
        inserted: function(el) {

        },
        updated: function(el) {

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
        ],
        requestData: ''
    }, 
    // After create Vue Instance, called one init method, beforeCreate()
    beforeCreate() {
      // Similar to Java Constructor methods.
      // data and methods are not initialized yet.   
    },
    // This is the second LifeCycle method
    created() {
        // Created Method, data and methods are already initialized, in this stage. 
        // The earliest stage to call the data and methods. 
    },
    // The third LifeCycle Method: template is already in memory, not rendered to page.
    beforeMount() {
        // Elements are not ready, still in raw format. 
    },
    // The fourth LifeCycle Method: template is rendered in the page, users can view the page. 
    mounted() {
        // Page is ready for users. 
        // mounted is the last lifecycle function. 
    },
    /** After mounted, the vue instance is complete, then it will move to next stage.  */
    /***********End **** Methods during creation stage************** */
    /********************Stage of running *************** */
    // When data changes, it will trigger this function. Those two functions will run 0 or more times.
    beforeUpdate() {
        console.log("before update");
    },
    // Update DOM Tree in memory, and render page. Then call updated method. 
    updated() {
        // page and data are same, already updated. 
    },
    /********************End Stage of running *************** */
    /********************Stage of destory *************** */
    beforeDestroy() {
        // Vue instance steps into the destory stage. 
        // Instance all the properties are still available. 
    },
    destroyed() {
        // All the properties are destroyed. 
    },
    /********************End Stage of destroy *************** */
    methods: {
        add() {
            if(this.id=='' || this.name == '') {
                alert("Required Data Field");
                return;
            }
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
            return this.list.filter(item => {
                if(item.name.includes(keywords)) {
                    return item;
                }
            });
        },
        getInfo() { // Send get Request
            this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(result){
                this.requestData = result.body;
            });
        },
        postInfo() {
            this.$http.post('https://jsonplaceholder.typicode.com/users', {}, {emulateJSON:true}).then(
                result=> {
                    this.requestData = result;
                }
            )
        },
        jsonpInfo() {
            this.$http.jsonp('https://jsonplaceholder.typicode.com/comments').then(
                result=> {
                    this.requestData = result.body;
                }
            )
        }
    },
    filters: {

    },
    directives: { // custom directis
        'fontweight' : { // set font weight
            bind: function(el, binding) {
                el.style.fontWeight = binding.value;
            }
        }, 
        // Simply custom directives
        'fontsize' : function(el, binding) { // function here = adding code to bind and update.
            el.style.fontSize = parseInt(binding.value) + 'px';
        }
    }
});
