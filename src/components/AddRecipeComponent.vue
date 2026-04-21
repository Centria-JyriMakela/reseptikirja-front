<template>
    <div>
        <button @click="toggle">Lisää resepti</button>
        <div v-if="showForm">
            <form @submit.prevent="addRecipe">
                <label for="name">Reseptin Nimi</label>
                <input type="text" id="name" v-model="recipe.name">
                <label for="ingredients">Ainesosat</label>
                <input type="text" id="ingredients" v-model="recipe.ingredients">
                <label for="instructions">Ohjeet</label>
                <input type="text" id="instructions" v-model="recipe.instructions">
                <label for="time">Aika</label>
                <input type="number" id="time" v-model="recipe.time">
                <button type="submit">Lisää</button>
            </form>
        </div>
    </div>
</template>

<script lang="js">
import {defineComponent} from 'vue';

export default defineComponent({
    name:'AddRecipeComponent',
    setup(){},
    data(){
        return {
            recipe:{
                name: "",
                ingredients: "",
                instructions: "",
                time: 0
            },
            show: false
        }
    },
    methods:{
        showForm(){
            return this.show;
        },
        toggle(){
            if(this.show){
                this.show = false;
            }
            else {
                this.show = true;
            }
        },
        addRecipe(){
            const token = localStorage.getItem("token");
            const tokenData = JSON.parse(atob(token.split('.')[1]));
            const userId = tokenData.user_id;
            fetch('http://localhost:8000/recipes',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                   user_id: userId,
                   name: this.recipe.name,
                   instructions: this.recipe.instructions,
                   ingredients: this.recipe.ingredients,
                   time: this.recipe.time 
                })
            }).then(response =>{
                if(response.status === 200){
                    alert('Resepti lisätty onnistuneesti');
                    this.toggle();
                }
                else{
                    alert('Reseptin lisääminen epäonnistui');
                }
            })
        }
    }
})
</script>

<style scoped>

</style>