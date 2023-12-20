<template>
<router-view></router-view>
  <!-- <Header></Header> -->
  
    <!-- <Books ></Books> -->
    
</template>

<script>
//import Header from './components/Header.vue'
//import Books from './components/Books.vue';
//import SideBar from './components/SideBar.vue';

export default {
  name: 'App',
  components: {
    //Header,
   // Books,
},
  data() {
    return {
      lessons: [],
      sortBy: localStorage.getItem("sortBy") ? JSON.parse(localStorage.getItem("sortBy")) : this.lessons.Title,  // this needs repair
      ascending: localStorage.getItem("ascending") ? JSON.parse(localStorage.getItem("ascending")) : true,
      cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
    }
  },
  created() {
    if (!JSON.parse(localStorage.getItem("lessons"))) {
      fetch('http://localhost:4000/library/getBooks')
        .then((res) => res.json())
        .then((data) => {
          this.lessons = data;
          localStorage.setItem("lessons", JSON.stringify(this.lessons));
        })
        .catch((err) => console.log(err));
      }  else {
      this.lessons = JSON.parse(localStorage.getItem("lessons"));
    }
  },
  methods: {
    addLessonToCart(lesson) {
      console.log("addLessonToCart")
      if (lesson.AvailableCopies > 0) {
        this.cart.push({
          id: lesson.id,
          Title: lesson.Title,
          Authors: lesson.Authors,
          amount: 1,
          Category: lesson.Category,
        });
        let lessonIndex = this.lessons.indexOf(lesson);
        this.lessons[lessonIndex].space = this.lessons[lessonIndex].AvailableCopies - 1;
      }
      localStorage.setItem("cart", JSON.stringify(this.cart));
      localStorage.setItem("lessons", JSON.stringify(this.lessons));
    },
    ascChange(ascending) {
      console.log("ascChange", ascending)
      this.ascending = ascending;
      localStorage.setItem("ascending", JSON.stringify(this.ascending));
    },
    onSortChange(sortBy) {
      console.log("onSortChange", sortBy)
      this.sortBy = sortBy;
      localStorage.setItem("sortBy", JSON.stringify(this.sortBy));
    },
    iscartEmpty() {
      if (this.cart.length === 0) return true;
    },
    removeLessonFromCart(lesson) {
      console.log("entered removeLessonFromCart")
      let cartIndex = this.cart.indexOf(lesson);
      console.log("cartIndex:",cartIndex)
      this.cart.splice(cartIndex, 1);
      console.log(JSON.stringify(this.cart))
      localStorage.setItem("cart", JSON.stringify(this.cart));
      for (let i = 0; i < this.lessons.length; i++) {
        if (this.lessons[i].id === lesson.id) {
          this.lessons[i].AvailableCopies += 1;
          localStorage.setItem("lessons", JSON.stringify(this.lessons));
        }
      }
    },
  },
  computed: {
    /*  sortLessons() {
      switch (this.sortBy) {
        case "Title":
          this.lessons.sort(function compare(a, b) {
            if (a.Title > b.Title) return 1;
            if (b.Title > a.Title) return -1;
            return 0;
          });
          break;
        case "Authors":
          this.lessons.sort(function compare(a, b) {
            if (a.Authors > b.Authors) return 1;
            if (b.Authors > a.Authors) return -1;
            return 0;
          });
          break;
        case "Category":
          this.lessons.sort(function compare(a, b) {
            if (a.price > b.price) return 1;
            if (b.price > a.price) return -1;
            return 0;
          });
          break;
        case "AvailableCopies":
          this.lessons.sort(function compare(a, b) {
            if (a.AvailableCopies > b.AvailableCopies) return 1;
            if (b.AvailableCopies > a.AvailableCopies) return -1;
            return 0;
          });
          break;
        default:
          this.lessons.sort(function compare(a, b) {
            if (a.AvailableCopies > b.AvailableCopies) return 1;
            if (b.AvailableCopies > a.AvailableCopies) return -1;
            return 0;
          });
      }

      if (!this.ascending) {
        this.lessons.reverse();
      }

      return this.lessons;
    }  */
  } 
}
</script>

<style>

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 95vw;
  margin-left: 7%
} 






/*
.lesson-img-div {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}

.lesson-img {
  max-width: 90px;
  max-height: 90px;
} */
</style>
