<template>
  <button @click="getWeather">test</button>
  <button @click="console.log(weatherInfo)">console</button>










  <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
    <div class="flex items-center justify-between mb-4">
      <h5 class="text-xl font-bold leading-none text-gray-900">Прогноз на 5 дней</h5>
      <a href="#" class="text-sm font-medium text-blue-600 hover:underline">
        View all
      </a>
    </div>
    <div class="flow-root">
      <ul role="list" class="divide-y divide-gray-200">




        <li v-for="weather in weatherInfo" class="py-3 sm:py-4">
          <div class="flex items-center ">
            <div class="flex-shrink-0">
              <img class="w-8 h-8 rounded-full" v-bind:src="weather.pic" alt="Bonnie image">

            </div>
            <div class="flex-1 min-w-0 ms-4">
              <p class="text-sm font-medium text-gray-900 truncate">
                {{ weather.day }}
              </p>
              <p class="text-sm text-gray-500 truncate">
                email@windster.com
              </p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-gray-900">
              {{ weather.temp }}°C
            </div>
          </div>
        </li>




      </ul>
    </div>
  </div>
</template>

<script setup>

import { ref, inject, watch, onMounted } from 'vue'

defineProps({
  type: Object,
  required: true
})




const city = inject("city")

const weatherInfo = inject("weatherInfo")



</script>