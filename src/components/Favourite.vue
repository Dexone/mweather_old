<template>
    <div class="px-4 py-3 text-sm text-gray-900">
        <div class="font-medium truncate">Избранные города</div>
    </div>
    <ul class="py-2 text-sm text-gray-700 ">
        <li v-for="favourite, index in favouriteCity">
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">{{ favourite }} </a>
            <!-- <button @click="favouriteCity.splice(index, 1)">delete</button> -->
        </li>

    </ul>
    <!-- <div class="py-2">
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 ">Sign out</a>
    </div> -->
</template>

<script setup>
import { ref, inject, watch, onMounted } from 'vue'

defineProps({
    type: Object,
    required: true
})



const favouriteCity = inject("favouriteCity")
</script>