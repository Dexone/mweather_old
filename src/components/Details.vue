<template>
    <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl">
        Подробный прогноз на {{ weatherInfo[detailsIndex].date }}
    </h5>


    <ul class="my-4 space-y-3" v-for="weather, index in weatherDetails">


        <p class="text-sm font-normal text-gray-500">
            <a
                v-if="weather.dt_txt.slice(11).slice(0, 2) === '12' || weather.dt_txt.slice(11).slice(0, 2) === '15'">Днем</a>
            <a
                v-if="weather.dt_txt.slice(11).slice(0, 2) === '18' || weather.dt_txt.slice(11).slice(0, 2) === '21'">Вечером</a>
            <a
                v-if="weather.dt_txt.slice(11).slice(0, 2) === '00' || weather.dt_txt.slice(11).slice(0, 2) === '03'">Ночью</a>
            <a
                v-if="weather.dt_txt.slice(11).slice(0, 2) === '06' || weather.dt_txt.slice(11).slice(0, 2) === '09'">Утром</a>
        </p>

        <li>
            <a
                class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                <img class="rounded-full w-6 h-6" v-bind:src="weatherInfo[detailsIndex].pic">
                <span class="flex-1 ms-3 whitespace-nowrap">Облачно</span>
                <span
                    class="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded">☔{{
            weather.pop }}%</span>
            </a>
        </li>




        <li>
            <a
                class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow ">
                <img class="rounded-full w-6 h-6" :style="{ transform: 'rotate(' + weather.deg + 'deg)' }"
                    src="../assets/arrow.png">
                <span class="flex-1 ms-3 whitespace-nowrap"> <a v-if="weather.deg > 330 || weather.deg < 30">С {{
            weather.wind }} м/с</a>
                    <a v-if="weather.deg > 30 && weather.deg < 60">СВ {{ weather.wind }} м/с</a>
                    <a v-if="weather.deg > 60 && weather.deg < 120">В {{ weather.wind }} м/с</a>
                    <a v-if="weather.deg > 120 && weather.deg < 150">ЮВ {{ weather.wind }} м/с</a>
                    <a v-if="weather.deg > 150 && weather.deg < 210">Ю {{ weather.wind }} м/с</a>
                    <a v-if="weather.deg > 210 && weather.deg < 240">ЮЗ {{ weather.wind }} м/с</a>
                    <a v-if="weather.deg > 240 && weather.deg < 300">З {{ weather.wind }} м/с</a>
                    <a v-if="weather.deg > 300 && weather.deg < 330">СЗ {{ weather.wind }} м/с</a></span>
                <span
                    class="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded">Порывы
                    до {{ weather.gust }} м/с</span>
            </a>
        </li>

        <li>
            <a
                class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                <img class="rounded-full w-6 h-6" src="../assets/temp.png">
                <span class="flex-1 ms-3 whitespace-nowrap">
                    {{ weather.temp }}
                </span>
                <span
                    class="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded">Ощущается
                    как {{ weather.feels_like }}</span>
            </a>
        </li>

        <li>
            <a
                class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow ">
                <img class="rounded-full w-6 h-6" src="../assets/humidity.png">

                <span class="flex-1 ms-3 whitespace-nowrap">{{ weather.humidity }}%</span>
                <span
                    class="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded">
                    {{ weather.grnd }}мм рт.ст.</span>
            </a>
        </li>
    </ul>

</template>

<script setup>

import { inject, watch, ref } from 'vue'

let detailsIndex = inject("detailsIndex")
const weatherInfo = inject("weatherInfo")

const weatherDetails = ref([])

watch(weatherInfo, () => {
    let b = detailsIndex.value
    for (let i = 0; i < 4; i++) {
        weatherDetails.value[i] = weatherInfo.value[b]
        b = b + 2
    }
})

defineProps({
    type: Object,
    required: true
})

</script>