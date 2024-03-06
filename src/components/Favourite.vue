<template>
    <div class="px-4 py-3 text-sm text-gray-900">
        <div class="font-medium truncate">Избранные города</div>
    </div>
    <ul class="py-2 text-sm text-gray-700">
        <li v-for="favourite, index in favouriteCity">
            <a @click="city = 'q=' + favourite, inputCity = favourite" class="block px-4 py-2 hover:bg-gray-100 ">{{
                favourite
            }} </a>
        </li>
    </ul>
</template>

<script setup>
import { inject } from 'vue'
import { useStorage } from '@vueuse/core'



defineProps({
    type: Object,
    required: true
})

const inputCity = inject("inputCity")
const city = inject("city")
const favouriteCity = inject("favouriteCity")


const state = useStorage('vue-use-local-storage', favouriteCity)
</script>