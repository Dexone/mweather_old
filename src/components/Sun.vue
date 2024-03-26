<template>

    <div class="flex justify-between mb-1">
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
let sun = ref([])
const weatherInfo = inject("weatherInfo")

watch(weatherInfo, () => {
    let raznHour = Math.floor((weatherInfo.value[0].sunset - weatherInfo.value[0].sunrise) / 60 / 60)
    let raznMin = Math.round(((weatherInfo.value[0].sunset - weatherInfo.value[0].sunrise) - (raznHour * 60 * 60)) / 60)


    let date = Math.round(new Date().getTime()/1000) //time now in seconds
    let razn1 = (weatherInfo.value[0].sunset - weatherInfo.value[0].sunrise)/100 // разница между датами / 100
    let razn2 = Math.round((date - weatherInfo.value[0].sunrise)/razn1)

    sun.value = [(String(new Date(weatherInfo.value[0].sunrise * 1000))).slice(16, 21), raznHour + "ч " + raznMin + "мин", String(new Date(weatherInfo.value[0].sunset * 1000)).slice(16, 21), razn2]
})


defineProps({
    type: Object,
    required: true
})
</script>