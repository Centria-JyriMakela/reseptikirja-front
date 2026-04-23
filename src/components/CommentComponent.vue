<template>
    <div>
        <h2>Kommentit</h2>
        <div v-for="comment in comments" :key="comment.id">
            <p>{{ comment.comment }}</p>
            <p>{{ comment.author }}</p>
            <p>{{ comment.created }}</p>
        </div>
    </div>
</template>

<script lang="js">
import {defineComponent} from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
    name:'CommentComponent',
    setup(){
        const route = useRoute();
        const id = route.params.id;
        return {
            id
        }

    },
    data(){
        return {
            comments: []
        }
    },
    methods:{
        getComments(){
            fetch(`http://localhost:8000/comments/${this.id}`, {
                method: 'GET',
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            .then(response =>{
                if(response.status === 200){
                    response.json().then(data =>{
                        this.comments = data;
                    })
                }
                else{
                    alert('Kommenttien haku epäonnistui');
                }
            })
        }
    },
    mounted(){
        this.getComments();
    }
})
</script>

<style scoped>

</style>