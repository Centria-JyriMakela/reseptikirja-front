<template>
    <div class="navbar">
        <h1>Reseptikirja</h1>
        <a class="link" href="/reseptit">Reseptit</a>
        <a class="link" href="/profiili" v-if="isLoggedIn">Profiili</a>
        <a class="link" href="/kirjaudu" v-if="!isLoggedIn">Kirjaudu sisään</a>
        <a class="link" href="/rekisteroidy" v-if="!isLoggedIn">Rekisteröidy</a>
        <button class="button" @click="logout" v-if="isLoggedIn">Kirjaudu ulos</button>
    </div>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import {useRouter} from 'vue-router';
export default defineComponent ({
    name:"HeaderComponent",
    setup(){
        const router = new useRouter();

        return {
            router
        }
    },
    methods:{
        isLoggedIn(){
            if(localStorage.getItem('token')){
                return true;
            }
            else {
                return false;
            }
        },
        logout(){
            localStorage.removeItem('token');
            this.router.push('/')
        }

    }
})

</script>

<style scoped>
.navbar{
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: center;
    background-color: coral;
    align-items: center;
}
.link{
    padding: 5px 5px 5px 5px;
}
.button{
    height: 50px;
}



</style>