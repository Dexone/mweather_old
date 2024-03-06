<template>
    <div class="px-4 py-3 text-sm text-gray-900">
        <div class="font-medium truncate">Избранные города</div>
    </div>
    <ul class="py-2 text-sm text-gray-700">
        <li v-for="favourite, index in favouriteCity">
            <a class="block px-4 py-2 hover:bg-gray-100 "><a @click="city = 'q=' + favourite, inputCity = favourite">
                    <a><img class="w-6 h-6 inline-block" v-bind:src="favouriteWeather.pic[index]"> </a>
                    <a>&nbsp;{{ favouriteWeather.temp[index] }}°</a>&nbsp;{{ favourite }}&nbsp;</a> 
                    <button class="items-end" @click="favouriteCity.splice(index, 1)">✕ </button> </a>
        </li>
    </ul>
</template>

<script setup>
import { inject, ref, watch } from 'vue'
import { useStorage } from '@vueuse/core'
import axios from 'axios'


const favouriteWeather = ref({ pic: [], temp: [] })





defineProps({
    type: Object,
    required: true
})

const inputCity = inject("inputCity")
const city = inject("city")
const favouriteCity = inject("favouriteCity")


const state = useStorage('vue-use-local-storage', favouriteCity)




function update() {
    for (let i = 0; i < favouriteCity.value.length; i++) {
        let a = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${favouriteCity.value[i]}&units=metric&appid=dd942f90e8c353bb0a469a7db5bbb3d4`).then((res) => {
            favouriteWeather.value.pic.push(import.meta.env.BASE_URL + "/min/" + res.data.list[0].weather[0].main + ".png")
            favouriteWeather.value.temp.push(Math.round(res.data.list[0].main.temp))
        })
    }
}
watch(favouriteCity.value, () => {
    update()
})

update()



</script>