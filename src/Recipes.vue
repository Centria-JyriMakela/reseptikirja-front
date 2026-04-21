<template>
    <header>
        <HeaderComponent />
    </header>
    <RecipeComponent />
    <AddRecipeComponent />
    <footer>
        <FooterComponent />
    </footer>
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import RecipeComponent from './components/RecipeComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import AddRecipeComponent from './components/AddRecipeComponent.vue';
</script>

<style scoped>

</style>