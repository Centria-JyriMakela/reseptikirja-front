<template>
    <div>
        <h2>{{ recipe.name }}</h2>
        <p><strong>Ainesosat:</strong>{{ recipe.ingredients }}</p>
        <p><strong>Valmistusohje:</strong>{{ recipe.instructions }}</p>
        <p><strong>Valmistusaika:</strong>{{ recipe.time }}</p>
    </div>
</template>

<script lang="js">
import {defineComponent} from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
    name:'RecipeInfoComponent',
    setup(){
        const route = useRoute();
        const recipeId = route.params.id;

        return {
            recipeId
        }
    },
    data(){
        return {
            recipe: {}
        }
    },
    methods:{
        getRecipe(){
            fetch(`http://localhost:8000/recipes/${this.recipeId}`,{
                method: 'GET',
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(response =>{
                if(response.status === 200){
                    response.json().then(data => {
                        this.recipe = data;
                    })
                }
                else{
                    alert('Reseptin haku epäonnistui');
                }
            })
        



    }
},
mounted(){
    this.getRecipe();
}

})
</script>

<style scoped>

</style>