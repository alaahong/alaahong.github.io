const App = {
  template: '#app-template',
  data: () => ({
        registerFormValid: true,
        username: null,
        password: null,
        emptyRules:[v=>!!v||'field is required'],
        emptyArrayRules:[
        v=>!!v||'please select two options at least',
        v=>(v && v.length>1)|| 'please select two options at least'
        ],
        loading:{
        loadingRegister: true,
        loadingLogin: true,
        loadingInfo: true,
        displayRegister:false,
        displayLogin:true,
        displayInfo:false,
        },
        loginDivGroupId: 'login-div-group-1',
        loginBtnGroupId: 'login-btn-group-1',
        infoDivGroupId: 'info-btn-group-1',
        loginBtnId: 'login-btn-id-1',
        registerBtnId: 'register-btn-id-1',
        infoNameId: 'info-name-id-1',
        stepContent:'Step 2: Click register button',
        loginForm:{
            name:null,
            pwd: 'defaultpwd',
        },
        formData:{
            name:null,
            pwd:'changeme',
            pic:null,
            gender:null,
            topic:null,
        },
        topicItem:['Java','C#',"Python","JavaScript","Go","Ruby","Groovy","Rust"]
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
    this.loading.displayInfo = false
        setTimeout(()=>{
       this.loading.loadingLogin =false
       this.loading.loadingRegister = true
       this.loading.loadingInfo = true
       let number = parseInt(Math.floor((Math.random()*10)+0))
       this.loginDivGroupId = 'login-group-id-'+ parseInt(number)
       this.loginBtnGroupId = 'login-group-id-'+ parseInt(number+1)
       this.infoDivGroupId = 'info-group-id-'+ parseInt(number+2)
       this.loginBtnId =    'login-btn-id-'     + parseInt(number)
       this.registerBtnId = 'login-btn-id-'  + parseInt(number+1)
       this.infoNameId = 'info-name-id-'  + parseInt(number+2)
    }, Math.floor((Math.random()*3000)+2000))
    },
    changeLoginFormId: function(){
        },
    showRegister(){
    this.loading.displayLogin =false
    this.loading.displayRegister =true
    this.loading.displayInfo = false
        setTimeout(()=>{
       this.loading.loadingLogin = true
       this.loading.loadingRegister = false
       this.loading.loadingInfo = true
       let number = parseInt(Math.floor((Math.random()*10)+0))
       this.loginDivGroupId = 'login-group-id-'+ parseInt(number)
       this.loginBtnGroupId = 'login-group-id-'+ parseInt(number+1)
       this.infoDivGroupId = 'info-group-id-'+ parseInt(number+2)
       this.loginBtnId =    'login-btn-id-'     + parseInt(number)
       this.registerBtnId = 'login-btn-id-'  + parseInt(number+1)
       this.infoNameId = 'info-name-id-'  + parseInt(number+2)
    }, Math.floor((Math.random()*3000)+2000))
    this.stepContent = 'Step 3: Fill required fields then submit'
    },
    login(){
        if(this.username == null || (this.username != this.formData.name)){
            alert('username is invalid')
        }else if(this.password == null || (this.password != this.formData.pwd)){
            alert('password is invalid')
        }else{
        this.loading.displayLogin = false
        this.loading.displayRegister = false
        this.loading.displayInfo = true
        setTimeout(()=>{
        this.loading.loadingLogin = true
        this.loading.loadingRegister = true
        this.loading.loadingInfo = false
       let number = parseInt(Math.floor((Math.random()*10)+0))
       this.loginDivGroupId = 'login-group-id-'+ parseInt(number)
       this.loginBtnGroupId = 'login-group-id-'+ parseInt(number+1)
       this.infoDivGroupId = 'info-group-id-'+ parseInt(number+2)
       this.loginBtnId =    'login-btn-id-'     + parseInt(number)
       this.registerBtnId = 'login-btn-id-'  + parseInt(number+1)
       this.infoNameId = 'info-name-id-'  + parseInt(number+2)
    }, Math.floor((Math.random()*3000)+2000))
        this.stepContent = 'Step 5: Assert username is same as yours, then take screenshot and output the picture path'
        }
    },
    validateForm(){
    let formValidated = this.$refs.registerForm.validate()
    if(formValidated){
    this.loading.displayLogin = true
    this.loading.displayRegister = false
    this.loading.displayInfo = false
        setTimeout(()=>{
       this.loading.loadingLogin = false
       this.loading.loadingInfo = true
       this.loading.loadingRegister = true
       let number = parseInt(Math.floor((Math.random()*10)+0))
       this.loginDivGroupId = 'login-group-id-'+ parseInt(number)
       this.loginBtnGroupId = 'login-group-id-'+ parseInt(number+1)
       this.infoDivGroupId = 'info-group-id-'+ parseInt(number+2)
       this.loginBtnId =    'login-btn-id-'     + parseInt(number)
       this.registerBtnId = 'login-btn-id-'  + parseInt(number+1)
       this.infoNameId = 'info-name-id-'  + parseInt(number+2)
    }, Math.floor((Math.random()*3000)+2000))
    this.stepContent = 'Step 4: Login'
    this.username = this.formData.name
    this.password = this.formData.pwd
    }
    },
    }
}
const vm = new Vue({
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount('#app')