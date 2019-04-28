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