<template>
    <Cart :cart="cart" @removeLessonFromCart="removeLessonFromCart"/>
 </template>
 
 <script>
 import Cart from "../components/Cart.vue"
 
 export default {
     name: "CartView",
     components: {
         Cart
     },
     props: {
         cart: Array,
     },
     emits: ["removeLessonFromCart"],
     methods: {
         removeLessonFromCart(lesson) {
             this.$emit("removeLessonFromCart", lesson)
         }
     }
 }
 
 
 </script>