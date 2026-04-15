<template>
    <div class="login-containter">
        <h2>Kirjaudu sisään</h2>
        <form @submit.prevent="login">
            <div class="login-form">
                <label for="email">Sähköposti</label>
                <input type="email" id="email" v-model="user.email">
                <label for="password">Salasana</label>
                <input type="password" id="password" v-model="user.password">
                <button type="submit">Kirjaudu sisään</button>
            </div>
        </form>
    </div>
</template>

<script lang="js">
import {reactive, defineComponent} from 'vue';
import {useRouter} from 'vue-router';

export default defineComponent({
    name: 'LoginComponent',
    setup(){
        const router = useRouter();
        return {
            router
        }
    },
    data(){
        return {
            user: reactive({
                email: '',
                password: ''
            })
        }
    },
    methods: {
        login(){
            console.log(this.user.email)
            fetch('http://10.177.200.14:8000/login',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                
                },
                body: JSON.stringify({
                    username: this.user.email,
                    password: this.user.password
                })
            }).then(response =>{
                if(response.status === 200){
                    response.json().then(data => {
                        localStorage.setItem('token', data.token);
                        this.router.push('/recipes');
                    }) 
                }
                else
                {
                    alert('Kirjautuminen epäonnistui');
                }
            })
        }
    
    }
})


</script>

<style scoped>

</style>