<template>
    <div>
        <router-link v-if="!iscartEmpty()" to="/cart" class="btn btn-primary btn-lg" :cart="cart">move to checkout</router-link>
        <router-link v-else to="/" class="btn btn-secondary btn-lg">move to checkout</router-link>
    </div>
</template>

<script>
export default {
    name: 'CheckoutButton',
    props: {
        iscartEmpty: Function,
        cart: Array
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
    display: flex;
    width: 90%;
    justify-content: right;
}
</style>