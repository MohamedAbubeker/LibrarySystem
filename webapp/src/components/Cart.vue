<template>
    <div class="main-content-cart">
        <div>
            <router-link to="/" class="btn btn-primary btn-lg">
                <h1>Home</h1>
            </router-link>
        </div>
        <div class="lessons">
            <div v-for="lesson in cart" :key="lesson.id" class="lesson border border-primary rounded">
                <div class="book content">
                    <h4>Subject: {{ lesson.Title }}</h4>
                    <h4>Loacation: {{ lesson.Authors }}</h4>
                    <h4>space: {{ lesson.Category }}</h4>
                    <!-- <h4>Price: <i class="fas fa-pound-sign"></i> {{ lesson.price }}</h4>
                    <button type="button" @click="$emit('removeLessonFromCart', lesson)">Remove</button> -->
                </div>
                <!-- <div>
                    <img class="lesson-img" :src="lesson.image" :alt="lesson.topic">
                </div> -->
            </div>
        </div>
    </div>
    <div>
        <form @submit.prevent="checkForm" class="checkout-form">
            <div>
                <p>Name: </p>
                <!-- used the @input and :value instead of v-model to be able to run a function on input for regex matching -->
                <input type="text" name="name" id="name" placeholder="Enter your name" v-model="name" required>
                <br />
                <p>Phone number: </p>
                <input type="text" name="phoneNumber" id="number" placeholder="Enter your phone number"
                    v-model="phoneNumber" required>
            </div>
            <button type="submit">Checkout</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'BookCart',
    data() {
        return {
            name: "",
            phoneNumber: "",
            submitted: false,
            errors: [],
            submitButton: false
        }
    },
    props: {
        cart: Array,
    },
    emits: ['removeLessonFromcart'],
    methods: {
        editName(value) {
            this.name = value;
        },
        editPhoneNumber(value) {
            this.phoneNumber = value;
        },
        addPersonalInfo() {
            this.submitted = !this.submitted;
        },
        checkForm() {
            if (this.name && this.phoneNumber && /^[A-Za-z]+$/.test(this.name) && /^\d+$/.test(this.phoneNumber)) {
                alert("submitted");
            } else if (this.name && this.phoneNumber && !/^[A-Za-z]+$/.test(this.name) && /^\d+$/.test(this.phoneNumber)) {
                alert("invalid name") 
            } else if (this.name && this.phoneNumber && /^[A-Za-z]+$/.test(this.name) && !/^\d+$/.test(this.phoneNumber)) {
                alert("invalid phone number") 
            } else if (this.name && this.phoneNumber && !/^[A-Za-z]+$/.test(this.name) && !/^\d+$/.test(this.phoneNumber)) {
                alert("invalid name & phone number") 
            }
        }
    },
    watch: {
        phoneNumber(newValue, oldValue) {
            if (newValue === "") {  // this if statement added to avoid infinite loop as /^\d+$/ regex doesn't match the empty string
                this.editPhoneNumber("");
            } else if (/^\d+$/.test(newValue)) {
                this.editPhoneNumber(newValue);
            } else {
                this.editPhoneNumber(oldValue)
            }
        },
        name(newValue, oldValue) {
            if (/^[A-Za-z]+$/.test(newValue)) {
                this.editName(newValue);
            } else {
                this.editName(oldValue)
            }
        }
    }
}
</script>