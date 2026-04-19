<template>
    <div class="navbar">
        <h1>Reseptikirja</h1>

        <RouterLink class="link" to="/reseptit">Reseptit</RouterLink>
        <RouterLink class="link" to="/profiili" v-if="isLoggedIn">Profiili</RouterLink>
        <RouterLink class="link" to="/kirjaudu" v-if="!isLoggedIn">Kirjaudu sisään</RouterLink>
        <RouterLink class="link" to="/rekisteroidy" v-if="!isLoggedIn">Rekisteröidy</RouterLink>
        <button class="button" @click="logout" v-if="isLoggedIn">Kirjaudu ulos</button>
    </div>
</template>

<script lang="js">
import { defineComponent, ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
    name: "HeaderComponent",
    setup() {
        const router = useRouter();
        const route = useRoute();
        const isLoggedIn = ref(false);

        const syncLoginStatus = () => {
            isLoggedIn.value = !!localStorage.getItem('token');
        };

        const logout = () => {
            localStorage.removeItem('token');
            syncLoginStatus();
            router.push('/');
        };

        onMounted(() => {
            syncLoginStatus();
            window.addEventListener('storage', syncLoginStatus);
        });

        onBeforeUnmount(() => {
            window.removeEventListener('storage', syncLoginStatus);
        });

        watch(() => route.fullPath, syncLoginStatus);

        return {
            isLoggedIn,
            logout
        };
    }
});
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