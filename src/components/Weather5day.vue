<template>
  <div class="flex items-center justify-between mb-4 ">    
    <h5 class="text-xl font-bold leading-none text-gray-900">Прогноз на 5 дней</h5>


    <!-- loader -->
    <div v-if="osnStore.loaderGetWeather === true">
    <svg aria-hidden="true" class="inline w-4 h-4 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
</div>
<!-- loader -->


    <a class="text-sm font-medium text-blue-600 hover:underline" v-if="osnStore.loaderGetWeather === false">
      {{ osnStore.weatherInfo[0].city }}
    </a>
  </div>
  <div class="flow-root">



<!-- loader -->
    <div role="status" class=" space-y-4 divide-y divide-gray-200 rounded animate-pulse mt-8" v-if="osnStore.loaderGetWeather === true">
    <div class="flex items-center justify-between">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full "></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full  w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full  w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full "></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full  w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full  w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full  w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full  w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full "></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full  w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full "></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full  w-12"></div>
    </div>

    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full w-12"></div>
    </div>
</div>
<!-- loader -->





    <ul class="divide-y divide-gray-200" v-if="osnStore.loaderGetWeather === false">




      <li v-for="weather, index in sortInfo" class="py-3 sm:py-4">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="w-8 h-8 rounded-full" v-bind:src="weather.pic">
          </div>
          <div class="flex-1 min-w-0 ms-4">
            <p class="text-sm font-medium text-gray-900 truncate">
              {{ weather.date }}
            </p>
            <p class="text-sm text-gray-500 truncate">
              {{ weather.week }}
            </p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900">
            {{ weather.temp }}°C
          </div>
          <button @click="detailsIndex = weather.number, scroll()"
            class="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded">Подробнее</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>

import { inject, ref, watch } from 'vue'
import { useOsn } from '../../store/osn.js';
import { onStartTyping } from '@vueuse/core';
const osnStore = useOsn();
defineProps({
  type: Object,
  required: true
})

const detailsIndex = inject("detailsIndex") //индекс дня в общем массиве при нажатии на него для подробного прогноза

const sortInfo = ref([])


watch(osnStore, () => {
  sortInfo.value.length = 0 //обнуление массива 5 дневного прогноза
  sortInfo.value.push(osnStore.weatherInfo[0]) //пуш первого дня (сегодняшнего)
  osnStore.weatherInfo[0].date = "Сегодня" //присвоение первому объекту значения сегодня
  if(osnStore.weatherInfo[0].dt_txt !== "loading"){
  for (let i = 4; i < 40; i++) {
    if (osnStore.weatherInfo[i].dt_txt.slice(11).slice(0, 2).includes("09")) { //отбор одного значения в день в 9 утра
      sortInfo.value.push(osnStore.weatherInfo[i]) //пуш погоды на этот день в массив 5-дневного прогноза
  }}
  }

})




function scroll() {
  window.scrollTo({
    top: 530,
    behavior: 'smooth'
  })
}


</script>