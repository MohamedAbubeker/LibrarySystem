<template>
   <!-- <Header></Header> -->
       <!--  -->
        <div class="main-content-home">
            
        <Books @addLessonToCart="addLessonToCart" :lessons="lessons" />
        <SideBar :sortBy="sortBy" :ascending="ascending" @onSortChange="onSortChange" @ascChange="ascChange" />


</div>
   
       
        <p>sdfasd</p>
    
    
</template>

<script>
import SideBar from '../components/SideBar.vue'
//import Header from '../components/Header.vue'
import Books from '../components/Books.vue'

export default {
    name: "HomeContent",
    components: {
        SideBar,
        Books
        //Header
        
    },
    props: {
        sortBy: String,
        ascending: Boolean,
        lessons: Array,
        cart: Array,
        iscartEmpty: Function
    },
    emits: ['onSortChange', 'ascChange', 'addLessonToCart'],
    methods: {
        onSortChange(type) {
            console.log(type)
            this.$emit('onSortChange', type);
        },
        ascChange(isAscending) {
            this.$emit('ascChange', isAscending);
        },
        addLessonToCart(lesson) {
            this.$emit('addLessonToCart', lesson);
        }

    }
}
</script>
<style>
.main-content-home {
  display: flex;
  justify-content: space-around;
}
</style>