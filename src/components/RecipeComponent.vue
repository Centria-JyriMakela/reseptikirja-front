<template>
    <div>
        <h2>Reseptit</h2>
        <ul>
            <li v-for="recipe in recipes" :key="recipe.id">
                <a :href="`/resepti/${recipe.id}`">{{ recipe.name}}</a>
            </li>
        </ul>
    </div>
</template>

<script lang="js">
import {defineComponent} from 'vue';
export default defineComponent({
    name:'RecipeComponent',
    setup(){},
    data(){
        return {
            recipes:[]
        }
    },
    methods:{
        getRecipes(){
            fetch('http://localhost:8000/recipes', {
                method: 'GET',
                headers:{
                    'Content-Type': 'application/json',
                }
            }).then(response =>{
                if(response.status === 200){
                    response.json().then(data => {
                        this.recipes = data;
                    })
                }
                else{
                    alert('Reseptien haku epäonnistui');
                }
            })
        }
    },
    mounted(){
        this.getRecipes();
    }
})
</script>

<style scoped>

</style>