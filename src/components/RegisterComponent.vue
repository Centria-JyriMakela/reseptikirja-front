<template>
    <div class="register-container">
        <h2>Rekisteröidy</h2>
        <form @submit.prevent="register">
            <div class="form-group">
                <label for="email">Sähköposti</label>
                <input type="email" id="email" v-model="user.email">
                <label for="password">Salasana</label>
                <input type="password" id="password" v-model="user.password">
                <label for="display_name">Nimimerkki</label>
                <input type="text" id="display_name" v-model="user.display_name">
                <button type="submit">Rekisteröidy</button>
            </div>
        </form>
    </div>
</template>

<script lang="js">
import { reactive, defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'RegisterComponent',
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
                password: '',
                display_name: ''
            })
        }
    },
    methods: {
        register(){
            fetch('http://localhost:8000/register',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.user)
            }).then(response => {
                if(response.status === 200){
                    this.router.push('/kirjaudu');
                }
                else{
                    alert('Rekisteröityminen epäonnistui');
                }
            })
        }
    }
})
</script>

<style scoped>

</style>