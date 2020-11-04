<template>
    <div>
        <h3>Please Correct Flowing Error</h3>
        <ul>
            <li v-for="e in error" v-bind:key="e.id ">
                {{e}}
            </li> 
        </ul>
        <h1>Register Form</h1>
        <form @submit="register" method="post"> 
            <label>FirstName : </label>
            <input type="text" name="firstName" v-model="reg.firstName" placeholder="Enter First Name"><br>
            <label>LastName : </label>
            <input type="text" name="lastName"  v-model="reg.lastName" placeholder="Enter Last Name"><br>
            <label>Email : </label>
            <input type="text" name="email" v-model="reg.email" placeholder="Enter email Name"><br>
            <label>Password : </label>
            <input type="password" name="password" v-model="reg.password" placeholder="Enter password Name"><br>
            <label>Phone : </label>
            <input type="text" name="phone" v-model="reg.phone" placeholder="Enter phone Name"><br>
            <button type="submit">Register</button>
        </form>
    </div>
</template>
<script>
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios,axios)
export default{
    name:"Register",
    data()
    {
        return { 
            error:[],
            reg:{
                firstName:null,
                lastName:null,
                email:null,
                password:null,
                phone:null
            }
        }
    },
    methods:{
        register(e){
            if(this.reg.email && this.reg.password && this.reg.firstName) {
                this.axios.post('http://localhost:3306/api/v1/user',this.reg)
                .then((result)=>{
                        console(result, "result")
                })
            }
            if(!this.reg.firstName){
                this.error.push("First Name is Requried Filed")
            }
            if(!this.reg.email) {
                this.error.push("Email is Requried Filed")
            }
            if(!this.reg.password){
                this.error.push("Email is Requried Filed")
            }
            console.log("Register Form",this.error)
            e.preventDefault()
        }
    }
}
</script>
