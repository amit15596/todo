<template>
    <div>
        <h3>Please Correct Flowing Error</h3>
        <ul>
            <li v-for="e in error" v-bind:key="e.id ">
                {{e}}
            </li> 
        </ul>
        <h1>Register Form</h1>
        <form @submit="register"> 
            <label>FirstName : </label>
            <input type="text" name="firstName" placeholder="Enter First Name"><br>
            <label>LastName : </label>
            <input type="text" name="lastName" placeholder="Enter Last Name"><br>
            <label>Email : </label>
            <input type="text" name="email" placeholder="Enter email Name"><br>
            <label>Password : </label>
            <input type="text" name="password" placeholder="Enter password Name"><br>
            <label>Phone : </label>
            <input type="text" name="phone" placeholder="Enter phone Name"><br>
            <button type="submit">Register</button>
        </form>
    </div>
</template>
<script>
export default{
    name:"login",
    data(){
        return { 
            error:[],
            firstName:null,
            lastName:null,
            email:null,
            password:null,
            phone:null
        }
    },
    methods:{
        register(e){
            if(this.email && this.password && this.firstName){
                console.warn(this.email)
            }
            if(!this.firstName){
                this.error.push("First Name is Requried Filed")
            }
            if(!this.email) {
                this.error.push("Email is Requried Filed")
            }
            if(!this.password){
                this.error.push("Email is Requried Filed")
            }
            console.log("Register Form",this.error)
            e.preventDefault()
        }
    }
}
</script>
