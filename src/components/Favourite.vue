<template>

    <div class="py-2 text-sm text-gray-700 ">

        <div class="flex items-center px-3 mb-3 mt-3">

            <div class="relative w-full">
                <button @click="latlong" class="absolute inset-y-0 start-0 flex items-center ps-3 ">

                    <svg class="w-4 h-4 text-blue-600 rotate-45" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 20 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9" />
                    </svg>

                </button>
                <input v-model="inputCity"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Город">

                <button v-if="syncCity" @click="favouriteCity.splice(favouriteCity.indexOf(inputCity), 1)" type="button"
                    class="absolute inset-y-0 end-0 flex items-center pe-3">
                    <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="m12.7 20.7 6.2-7.1c2.7-3 2.6-6.5.8-8.7A5 5 0 0 0 16 3c-1.3 0-2.7.4-4 1.4A6.3 6.3 0 0 0 8 3a5 5 0 0 0-3.7 1.9c-1.8 2.2-2 5.8.8 8.7l6.2 7a1 1 0 0 0 1.4 0Z" />
                    </svg>
                </button>

                <button v-else @click="favouriteCity.push(inputCity)" type="button"
                    class="absolute inset-y-0 end-0 flex items-center pe-3">
                    <svg class="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                    </svg>
                </button>

            </div>
            <button @click="inpCity()" type="submit"
                class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>Поиск
            </button>
        </div>



        <h2 class="mx-3 mb-3">
            <div class="rounded-xl border  border-t-0 border-gray-200">


<!-- loader -->
<div role="status" class=" space-y-4 divide-y divide-gray-200 rounded animate-pulse p-8" v-if="loaderUpdateFavourite === true">
    <div class="flex items-center justify-between">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>

    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
</div>
<!-- loader -->


                <div v-for="favourite, index in favouriteCity" v-if="loaderUpdateFavourite === false"
                    class="flex items-center justify-between w-full p-5 rounded-t-xl font-medium rtl:text-right text-gray-500 border border-b-0 border-l-0 border-r-0 border-gray-200 focus:ring-4 focus:ring-gray-200  hover:bg-gray-100 gap-3">
                    <span> <img class="w-6 h-6 inline-block" v-bind:src="favouriteWeather.pic[index]"> <a
                            @click="city = 'q=' + favourite, inputCity = favourite"> {{ favouriteWeather.temp[index] }}°
                            {{ favourite }}</a></span>

                    <span>
                        <button @click="city = 'q=' + favourite, inputCity = favourite, inpCity()" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-3 py-1 text-center me-2">Выбрать</button>
                        <button @click="favouriteCity.splice(index, 1)">&nbsp;✕</button></span>





                </div>
            </div>
        </h2>
    </div>

</template>

<script setup>
import { inject, ref, watch } from 'vue'
import { useStorage } from '@vueuse/core'
import axios from 'axios'
import { useOsn } from '../../store/osn.js';
const osnStore = useOsn();
defineProps({
    type: Object,
    required: true
})

const favouriteCity = ref(["Москва", "Санкт-Петербург", "Сочи"])
const state = useStorage('vue-use-local-storage', favouriteCity)

const favouriteWeather = ref({ pic: [], temp: [] })

const loaderUpdateFavourite = ref(false)
function update() { //обновление погоды городов в избранном
    loaderUpdateFavourite.value = true
    favouriteWeather.value.pic.length = 0
    favouriteWeather.value.temp.length = 0
    for (let i = 0; i < favouriteCity.value.length; i++) {
        setTimeout(() => {
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${favouriteCity.value[i]}&units=metric&appid=dd942f90e8c353bb0a469a7db5bbb3d4`).then((res) => {
                favouriteWeather.value.pic.push(import.meta.env.BASE_URL + "/min/" + res.data.list[0].weather[0].main + ".png")
                favouriteWeather.value.temp.push(Math.round(res.data.list[0].main.temp))
            })
        }, i * 300);
    }
    setTimeout(() => { //время работы лоадера от количества городов в изранном
        loaderUpdateFavourite.value = false
        }, favouriteCity.value.length * 300);

}
update()
watch(favouriteCity.value, () => { //если добавляется город в избранное, апдейт
    update()
})


const inputCity = ref()
function inpCity() { //отправка введенного в инпут города в поисковый запрос и выполнение запроса
    osnStore.city = 'q=' + inputCity.value
    osnStore.getWeather()
}

function latlong() { //запрос геолокации и передача координат в поисковый запрос, выполнение запроса
    navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        osnStore.city = "lat=" + lat + "&lon=" + lon
        osnStore.getWeather()
        watch(osnStore, () => { //присвоение инпуту полученного названия города после запроса
            inputCity.value = osnStore.weatherInfo[0].city
        }, { once: true })

    });
}



const syncCity = ref() //true если город в инпуте есть в избранном для кнопки лайка
watch([inputCity, favouriteCity.value], () => { //если меняется инпут или список избранного
    syncCity.value = favouriteCity.value.includes(inputCity.value) //поиск введенного в инпут города и возврат true если есть
})






osnStore.getWeather() //первый запрос погоды с городом по умолчанию при загрузке страницы
watch(osnStore, () => { //присвоение инпуту полученного названия города после запроса
            inputCity.value = osnStore.weatherInfo[0].city
        }, { once: true })



</script>