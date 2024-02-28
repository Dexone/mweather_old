<template>
  <div class="flex items-center justify-between mb-4 ">
    <h5 class="text-xl font-bold leading-none text-gray-900">Прогноз на 5 дней</h5>
    <a href="#" class="text-sm font-medium text-blue-600 hover:underline">
      {{ weatherInfo[selectedCity.nx].city }}
    </a>
  </div>
  <div class="flow-root">
    <ul role="list" class="divide-y divide-gray-200">




      <li v-for="weather, index in weatherInfo" class="py-3 sm:py-4">
        <div class="flex items-center ">
          <div class="flex-shrink-0">
            <img class="w-8 h-8 rounded-full" v-bind:src="weather.pic" alt="Bonnie image">

          </div>
          <div class="flex-1 min-w-0 ms-4">
            <p class="text-sm font-medium text-gray-900 truncate">
              {{ selectedCity.date[index] }}
            </p>
            <p class="text-sm text-gray-500 truncate">
              {{ selectedCity.week[index] }}
            </p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900">
            {{ weather.temp }}°C
          </div>
          <button @click="selectedCity.nx = index, console.log(selectedCity.nx), scroll()"
            class="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded">Подробнее</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>

import { inject } from 'vue'

defineProps({
  type: Object,
  required: true
})




let selectedCity = inject("selectedCity")
const weatherInfo = inject("weatherInfo")

function scroll() {
  window.scrollBy(0, 400)
}




let count = 1
let indexMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
let indexNed = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
for (let i = 0; i < 6; i++) {
  let d = new Date(new Date().getTime() + count * 60 * 60 * 1000);
  let Month = d.getMonth();
  let Ned = d.getDay();
  let Day = d.getDate();
  selectedCity.value.week.push(indexNed[Ned])
  selectedCity.value.date.push(Day + " " + indexMonth[Month])
  count = count + 24
}

</script>