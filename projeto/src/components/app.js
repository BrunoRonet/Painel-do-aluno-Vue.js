const app = new Vue ({

    el: '#app',
    data: {
        titulo: 'Crud com vue',
        adicionar: [],
        novoaluno: ''
    },
    methods:{
        adicionaraluno: function(){

           this.adicionar.push({
               nome: this.novoaluno,
               estado: false
           });
           this.novoaluno = '';
           localStorage.setItem('crud-vue', JSON.stringify(this.adicionar))
        },
        editar: function(index){
            this.adicionar[index].estado = true;
            localStorage.setItem('crud-vue', JSON.stringify(this.adicionar))

        },
        excluir: function(index){
           this.adicionar.splice(index, 1);
           localStorage.setItem('crud-vue', JSON.stringify(this.adicionar))

        }
    },
    created: function(){
        let dadosDB = JSON.parse(localStorage.getItem ('crud-vue'));
        if(dadosDB === null){
         this.adicionar = [];
        }else{
            this.adicionar = dadosDB;
        }   
        
    }
});
