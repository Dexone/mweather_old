<template>
    <!-- <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl">
        Подробный прогноз на {{ osnStore.weatherInfo[detailsIndex].date }}
    </h5> -->

    <div class="flex items-center justify-between mb-4 ">
        <h5 class="text-xl font-bold leading-none text-gray-900"> Подробный прогноз</h5>
        <a class="text-xl font-bold leading-none text-gray-900">
            {{  }}
        </a>
    </div>



    <ul class="my-4 space-y-3" v-for="weather, index in weatherDetails"
        v-if="osnStore.weatherInfo[0].dt_txt != 'loading'">


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



        <!-- loader -->
        <div role="status" class=" space-y-4 divide-y divide-gray-200 rounded animate-pulse"
            v-if="osnStore.loaderGetWeather === true">
            <div class="flex items-center justify-between">
                <div>
                    <div class="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                    <div class="w-32 h-2 bg-gray-200 rounded-full "></div>
                </div>
                <div class="h-2.5 bg-gray-300 rounded-full w-12"></div>
            </div>
            <div class="flex items-center justify-between pt-4">
                <div>
                    <div class="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                    <div class="w-32 h-2 bg-gray-200 rounded-full"></div>
                </div>
                <div class="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            </div>
            <div class="flex items-center justify-between pt-4">
                <div>
                    <div class="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                    <div class="w-32 h-2 bg-gray-200 rounded-full "></div>
                </div>
                <div class="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            </div>
            <div class="flex items-center justify-between pt-4">
                <div>
                    <div class="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                    <div class="w-32 h-2 bg-gray-200 rounded-full "></div>
                </div>
                <div class="h-2.5 bg-gray-300 rounded-full w-12"></div>
            </div>

        </div>
        <!-- loader -->



        <li v-if="osnStore.loaderGetWeather === false">
            <a
                class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                <img class="rounded-full w-6 h-6" v-bind:src="osnStore.weatherInfo[detailsIndex].pic">
                <span class="flex-1 ms-3 whitespace-nowrap">Облачно</span>
                <span
                    class="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded">☔{{
                        weather.pop }}%</span>
            </a>
        </li>




        <li v-if="osnStore.loaderGetWeather === false">
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

        <li v-if="osnStore.loaderGetWeather === false">
            <a
                class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                <img class="rounded-full w-6 h-6" src="../assets/temp.png">
                <span class="flex-1 ms-3 whitespace-nowrap">
                    {{ weather.temp }}°
                </span>
                <span
                    class="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded">Ощущается
                    как {{ weather.feels_like }}</span>
            </a>
        </li>

        <li v-if="osnStore.loaderGetWeather === false">
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
import axios from 'axios';
import { useOsn } from '../../store/osn.js';

const osnStore = useOsn();
defineProps({
    type: Object,
    required: true
})

let detailsIndex = inject("detailsIndex")

const weatherDetails = ref([])

watch(osnStore, () => {
    let b = detailsIndex.value //индекс выбранного дня
    for (let i = 0; i < 4; i++) { //получение 4 значений погоды (утро день...)
        weatherDetails.value[i] = osnStore.weatherInfo[b]
        b = b + 2 //пропуск 2 значений ибо 9:00 12:00
    }
})



//cdcvdvsdvdsfvdsfvbdfbdfb

let week = []
let date = [] //исп
let count = 1
let indexMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']; //исп
let indexNed = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
for (let i = 0; i < 40; i++) {
    let d = new Date(new Date().getTime() + count * 60 * 60 * 1000); //исп
    let Month = d.getMonth(); //исп
    let Ned = d.getDay();
    let Day = d.getDate(); //исп
    week.push(indexNed[Ned])
    date.push(Day + " " + indexMonth[Month])
    count = count + 3 //исп
}


const weatherInfo = ref([])
function getWeather(){
axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Kirov&units=metric&appid=dd942f90e8c353bb0a469a7db5bbb3d4`).then((res) => {
   const weatherData = res.data.list.map((item, index) => {
        return {
            dt_txt: res.data.list[index].dt_txt,
            day: res.data.list[index].dt_txt.slice(8, -9) + "." + res.data.list[index].dt_txt.slice(5, -12),
            pic: import.meta.env.BASE_URL + "/min/" + res.data.list[index].weather[0].main + ".png",
            temp: Math.round(res.data.list[index].main.temp),
            wind: Math.round(res.data.list[index].wind.speed),
            grnd: Math.round(res.data.list[index].main.grnd_level / 1.333),
            visibility: (res.data.list[index].visibility) / 1000,
            humidity: res.data.list[index].main.humidity,
            pop: Math.round(res.data.list[index].pop * 100),
            deg: res.data.list[index].wind.deg,
            feels_like: Math.round(res.data.list[index].main.feels_like),
            gust: Math.round(res.data.list[index].wind.gust),
            city: res.data.city.name,
            sunrise: res.data.city.sunrise,
            sunset: res.data.city.sunset,
            number: index,
            week: week[index],
            date: date[index]


        }
    })
    weatherInfo.value = weatherData;
    console.log(weatherInfo)
})
}
getWeather()



</script>