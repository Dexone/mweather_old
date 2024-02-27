<template>
    <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl ">
        Подробный прогноз
    </h5>
    <p class="text-sm font-normal text-gray-500 ">{{ weatherInfo[nx].city }}</p>
    <ul class="my-4 space-y-3">


        <li>
            <a href="#"
                class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow ">

                <img class="rounded-full w-6 h-6" v-bind:src="weatherInfo[nx].pic" alt="profile picture">

                <span class="flex-1 ms-3 whitespace-nowrap">Облачно</span>
                <span
                    class="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded ">Вероятность
                    осадков {{ weatherInfo[nx].pop }}%</span>
            </a>
        </li>




        <li>
            <a href="#"
                class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow ">
                <img class="rounded-full w-6 h-6" src="../assets/temp.png" alt="profile picture">

                <span class="flex-1 ms-3 whitespace-nowrap">{{ weatherInfo[nx].temp }}</span>
                <span
                    class="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded ">Ощущается
                    как {{ weatherInfo[nx].feels_like }}</span>
            </a>
        </li>





        <li>
            <a href="#"
                class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow ">
                <img :style="{ transform: 'rotate(' + weatherInfo[nx].deg + 'deg)' }"
                    class="rounded-full w-6 h-6"
                    src="../assets/arrow.png" alt="profile picture">
                <span class="flex-1 ms-3 whitespace-nowrap ">
                    <a v-if="weatherInfo[nx].deg > 0">Южный</a> {{ weatherInfo[nx].wind }} м/с
                </span>
                <span
                    class="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded ">Порывы
                    до {{ weatherInfo[nx].gust }} м/с</span>
            </a>
        </li>




        <li>
            <a href="#"
                class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow ">
                <img class="rounded-full w-6 h-6" src="../assets/humidity.png" alt="profile picture">

                <span class="flex-1 ms-3 whitespace-nowrap">Влажность {{ weatherInfo[nx].humidity }}%</span>
                <span
                    class="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded ">Давление
                    {{ weatherInfo[nx].grnd }}мм рт.ст.</span>
            </a>
        </li>



    </ul>
    <div>
        <a href="#" class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline ">
            <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            тест</a>
    </div>
</template>
  
<script setup>

import { inject } from 'vue'





const city = inject("city")
const weatherInfo = inject("weatherInfo")
const nx = inject("nx")


defineProps({
    type: Object,
    required: true
})




</script>