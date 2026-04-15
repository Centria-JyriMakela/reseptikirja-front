<template>
    <header>
        <HeaderComponent />
    </header>
    <div class="side"></div>
    <div class="content">
        <h2>Tervetuloa käyttämään reseptikirjaa!</h2>
        <p>Tämä on paikka, jossa voit tallentaa ja jakaa reseptejäsi.</p>
        <p>Voit luoda tilin ja <br>tallentaa reseptejäsi.</p>
    </div>
    <div class="side"></div>
    <footer>
        <FooterComponent />
    </footer>
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<style scoped>
.side {
    flex: 1;
    background-color: #f0f0f0;
    width: 15%;
}
.content {
    flex: 2;
    padding: 20px;
    background-color: #ffffff;
    border-left: 1px solid #eeeeee;
    border-right: 1px solid #eeeeee;
    border-top: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
}


</style>