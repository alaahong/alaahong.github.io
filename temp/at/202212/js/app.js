const App = {
  template: '#app-template',
  data: () => ({
        loading:{
        loadingRegister: false,
        loadingLogin: true,
        displayLogin:true,
        displayRegister:false,
        },
        loginForm:{
            name:null,
            pwd: null,
        },
        formData:{
            name:null,
            pwd:null,
            pic:null,
            sexual:null,
            topic:[],
        },
    }),
    created(){
        this.$nextTick(
            ()=>{
            this.showLoginContent()
            }
        )
    },
    methods:{
    showLoginContent: function(){
    this.loading.displayLogin =true
    this.loading.displayRegister =false
        setTimeout(()=>{
       this.loading.loadingLogin =false
       this.loading.loadingRegister = (true)
    }, Math.floor((Math.random()*3000)+2000));
    },
    showRegister(){
    this.loading.displayLogin =false
    this.loading.displayRegister =true
        setTimeout(()=>{
       this.loading.loadingLogin = true
       this.loading.loadingRegister = false
    }, Math.floor((Math.random()*3000)+2000));
    },
    showLogin(){
    this.loading.displayLogin = true
    this.loading.displayRegister = false
    },
    }
}
const vm = new Vue({
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount('#app')