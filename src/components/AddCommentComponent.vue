<template>
    <div>
        <h2>Lisää kommentti</h2>
        <textarea v-model="comment.comment" placeholder="Kirjoita kommentti tähän"></textarea>
        <button @click="addComment">Lisää kommentti</button>
    </div>
</template>

<script lang="js">
import {defineComponent} from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    name: 'AddCommentComponent',
    setup(){
        const route = useRoute();
        const recipeId = route.params.id;
        return {
            recipeId
        }
    },
    data(){
        return {
            comment: {}
            }
        
    },
    methods:{
        addComment(){
            const token = localStorage.getItem("token");
            const tokenData = JSON.parse(atob(token.split('.')[1]));
            const userId = tokenData.user_id;
            fetch(`http://localhost:8000/comments/${this.recipeId}`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    user_id: userId,
                    recipe_id: this.recipeId,
                    comment: this.comment.comment
                })
            }).then(response =>{
                if(response.status === 200){
                    alert('Kommentti lisätty onnistuneesti');
                }
                else{
                    alert('Kommentin lisääminen epäonnistui');
                }
            })
        }
    }
})

</script>