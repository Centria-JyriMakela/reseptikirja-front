<template>

</template>

<script lang="js">
import {defineComponent} from 'vue';
export default defineComponent({
    name:'RecipeInfoComponent',
    setup(){
        const recipeId =this.$route.params.id;

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
}

})
</script>

<style scoped>

</style>