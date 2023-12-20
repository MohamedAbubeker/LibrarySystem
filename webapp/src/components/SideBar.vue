<template>
    <div class="sidebar">
        <h2>Sort by:</h2>
            <div>
                <input v-if="sortBy.includes('Title')" type="radio" id="Title" name="sortby" value="Title"
                    @change="$emit('onSortChange', 'Title')" checked>
                <input v-else type="radio" id="Title" name="sortby" value="Title" @change="$emit('onSortChange', 'Title')">
                <label for="Title">Title</label><br>
                <input v-if="sortBy.includes('Authors')" type="radio" id="Authors" name="sortby" value="Authors"
                    @change="$emit('onSortChange', 'Authors')" checked>
                <input v-else type="radio" id="Authors" name="sortby" value="Authors" @change="$emit('onSortChange', 'Authors')">
                <label for="locatoin">Locatoin</label><br>
                <input v-if="sortBy.includes('Category')" type="radio" id="Category" name="sortby" value="Category"
                    @change="$emit('onSortChange', 'Category')" checked>
                <input v-else type="radio" id="Category" name="sortby" value="Category" @change="$emit('onSortChange', 'Category')">
                <label for="Category">Category</label><br>
                <input v-if="sortBy.includes('AvailableCopies')" type="radio" id="availability" name="sortby" value="AvailableCopies"
                    @change="$emit('onSortChange', 'AvailableCopies')" checked>
                <input v-else type="radio" id="availability" name="sortby" value="AvailableCopies" @change="$emit('onSortChange', 'AvailableCopies')">
                <label for="availability">Availability</label><br>
                <br>
                <input v-if="ascending" type="radio" id="ascending" name="ascdes" :value="ascending"
                    @change="$emit('ascChange', true)" checked>
                <input v-else type="radio" id="ascending" name="ascdes" :value="ascending" @change="$emit('ascChange', true)">
                <label for="ascending">Ascedning</label><br>
                <input v-if="!ascending" type="radio" id="descending" name="ascdes" :value="ascending"
                    @change="$emit('ascChange', false)" checked>
                <input v-else type="radio" id="descending" name="ascdes" :value="ascending" @change="$emit('ascChange', false)">
                <label for="descending">Descending</label><br>
            </div>
    </div>
</template>

<script>    
export default {
    name: 'SideBar',
    data() {
        return {
            lessons: []
        }
    },
    props: {
        sortBy: String,
        ascending: Boolean
    },
    emists: ["onSortChange", "ascChange"],
    
}
</script>
<style>
/* .sidebar {
  display: flex;
  flex-direction: column;
  justify-content: top;
  width: 15%;
  padding: 1%;
} */
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped></style> -->