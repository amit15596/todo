<template>
    <div>
        <h1>List API</h1>
        <span>
            <table border="2">
                <tr aria-colspan="2">
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                <tr v-for="item in list" v-bind:key="item.id">
                    <td>{{item.firstName}}</td>
                    <td>{{item.lastName}}</td>
                    <td>{{item.email}}</td>
                    <td>{{item.phone}}</td>
                </tr>
            </table>
        </span>
    </div>
</template>
<script>
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios,axios)
export default{
    name:"Employee List",
    data(){
        return {
            list:null
        }
    },
    mounted()
    {
        Vue.axios.get('http://localhost:3306/api/v1/user')
        .then(result => {
            this.list = result.data.response
        })
    }
}
</script>