<template>
    <div class="container  pt-5 ">
        <div class="row">

            <div class="card col-1 " v-for="lesson in lessons" :key="lesson._id" style="width:300px">
                <img class="card-img-top" src="../assets/logo.png" alt="Card image" style="width:20%">
                    <div class="card-body">
                        <p class="card-title">Title: {{ lesson.Title }}</p>
                        <p class="card-text">Authors: {{ lesson.Authors }}</p>
                        <p class="card-text">Category: {{ lesson.Category }}</p>
                    </div>
                <a href="#" class="btn btn-primary">See Profile</a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'BookContent',

    props: {
        Book: Object,


    },
    data() {
        return {
            lessons: []
        };
    },
    mounted() {
        // Make a GET request to your backend API endpoint
        axios.get('http://localhost:4000/library/getBooks')
            .then(response => {
                // Handle the response data by assigning it to the component's data
                this.lessons = response.data;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

}


</script>
<style>
.card {
    justify-content: space-between;
    margin: 4%;
    padding: 1%;

}
</style>