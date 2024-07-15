<template>

<div v-if="osnStore.loaderGetWeather === true" class="space-y-2.5 animate-pulse">
    <div class="flex items-center w-full">
        <div class="h-2.5 bg-gray-200 rounded-full w-32"></div>
        <div class="h-2.5 ms-2 bg-gray-300 rounded-full  w-24"></div>
        <div class="h-2.5 ms-2 bg-gray-300 rounded-full  w-full"></div>
    </div>
    <div class="flex items-center w-full">
        <div class="h-2.5 bg-gray-200 rounded-full  w-full"></div>
                <div class="h-2.5 ms-2 bg-gray-300 rounded-full  w-full"></div>
        <div class="h-2.5 ms-2 bg-gray-300 rounded-full w-24"></div>
    </div>
    <div class="flex items-center w-full">
        <div class="h-2.5 bg-gray-300 rounded-full w-full"></div>
        <div class="h-2.5 ms-2 bg-gray-200 rounded-full  w-80"></div>
        <div class="h-2.5 ms-2 bg-gray-300 rounded-fullw-full"></div>
    </div>
    <div class="flex items-center w-full">
        <div class="h-2.5 ms-2 bg-gray-200 rounded-full w-full"></div>
                <div class="h-2.5 ms-2 bg-gray-300 rounded-full  w-full"></div>
        <div class="h-2.5 ms-2 bg-gray-300 rounded-full w-24"></div>
    </div>

</div>

    <div class="flex justify-between mb-1" v-if="osnStore.loaderGetWeather === false">
        <!-- <span class="text-base font-medium text-blue-700 ">Flowbite</span> -->
        <img width="25px" src="../assets/sun-up.png">
        <span class="text-sm text-gray-500 ">Световой день</span>
        <!-- <span class="text-sm font-medium text-blue-700 ">3232</span> -->
        <img width="25px" src="../assets/sun-down.png">
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2.5 ">
        <div class="bg-yellow-400 h-2.5 rounded-full" :style="{ width: sun[3] + '%' }"
        ></div>
    </div>

    <div class="flex justify-between mb-1">

        <span class="text-sm font-medium text-yellow-700 "> {{ sun[0] }}</span>
        <span class="text-sm font-medium text-yellow-700 "> {{ sun[1] }}</span>
        <span class="text-sm font-medium text-yellow-700 "> {{ sun[2] }}</span>
    </div>

</template>

<script setup>
import { inject, watch, ref } from 'vue'
import { useOsn } from '../../store/osn.js';
const osnStore = useOsn();
let sun = ref([])

watch(osnStore, () => {
    let raznHour = Math.floor((osnStore.weatherInfo[0].sunset - osnStore.weatherInfo[0].sunrise) / 60 / 60)
    let raznMin = Math.round(((osnStore.weatherInfo[0].sunset - osnStore.weatherInfo[0].sunrise) - (raznHour * 60 * 60)) / 60)


    let date = Math.round(new Date().getTime()/1000) //time now in seconds
    let razn1 = (osnStore.weatherInfo[0].sunset - osnStore.weatherInfo[0].sunrise)/100 // разница между датами / 100
    let razn2 = Math.round((date - osnStore.weatherInfo[0].sunrise)/razn1)

    sun.value = [(String(new Date(osnStore.weatherInfo[0].sunrise * 1000))).slice(16, 21), raznHour + "ч " + raznMin + "мин", String(new Date(osnStore.weatherInfo[0].sunset * 1000)).slice(16, 21), razn2]
})


defineProps({
    type: Object,
    required: true
})
</script>