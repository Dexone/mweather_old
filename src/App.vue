

<template>
  <button @click="console.log(weatherInfo)">test</button>
  <main class="bg-white rounded-lg shadow max-w-screen-xl mx-auto">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap">Flowbite</span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
          </li>
        </ul>
      </div>




      <Details />



      <Weather5day />

      <Graph />



      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center ">© 2024 <a href="https://github.com/Dexone"
          class="hover:underline">Dexone</a>. All Rights Reserved.</span>
    </div>
  </main>







  <Footer />
</template>


<script setup>
import Weather5day from "./components/Weather5day.vue"
import Footer from "./components/Footer.vue"
import Graph from "./components/Graph.vue"
import Details from "./components/Details.vue"
import axios from 'axios'
import { provide, ref, watch } from 'vue'


const city = ref("")
provide("city", city)

// let nx = 0
// provide("nx", nx)




watch(city, () => {
  getWeather()
})
const weatherInfo = ref([{ dt_txt: "loading", day: "loading", pic: "loading", temp: "loading", wind: "loading", grnd: "loading", visibility: "loading", humidity: "loading", pop: "loading", deg: "0", feels_like: "0", gust: "0" }])
provide("weatherInfo", weatherInfo)

let graphInfo = ref([])
provide("graphInfo", graphInfo)
function getWeather() {
  const cityValue = city.value
  axios.get(`https://api.openweathermap.org/data/2.5/forecast?${cityValue}&units=metric&appid=dd942f90e8c353bb0a469a7db5bbb3d4`).then((res) => {
    graphInfo.value.x = ["Now", res.data.list[1].dt_txt.slice(11, -6), res.data.list[2].dt_txt.slice(11, -6), res.data.list[3].dt_txt.slice(11, -6), res.data.list[4].dt_txt.slice(11, -6), res.data.list[5].dt_txt.slice(11, -6), res.data.list[6].dt_txt.slice(11, -6), res.data.list[7].dt_txt.slice(11, -6), res.data.list[8].dt_txt.slice(11, -6)]
    graphInfo.value.y = [res.data.list[0].main.temp, res.data.list[1].main.temp, res.data.list[2].main.temp, res.data.list[3].main.temp, res.data.list[4].main.temp, res.data.list[5].main.temp, res.data.list[6].main.temp, res.data.list[7].main.temp, res.data.list[8].main.temp]
    console.log(res.data)
    console.log(weatherInfo)
    const weatherData = res.data.list.map((item, index) => {
      return {
        dt_txt: res.data.list[index].dt_txt,
        day: res.data.list[index].dt_txt.slice(8, -9) + "." + res.data.list[index].dt_txt.slice(5, -12),
        pic: import.meta.env.BASE_URL + "/src/assets/min/" + res.data.list[index].weather[0].main + ".png",
        temp: Math.round(res.data.list[index].main.temp),
        wind: Math.round(res.data.list[index].wind.speed),
        grnd: Math.round(res.data.list[index].main.grnd_level / 1.333),
        visibility: (res.data.list[index].visibility) / 1000,
        humidity: res.data.list[index].main.humidity,
        pop: Math.round(res.data.list[index].pop * 100),
        deg: res.data.list[index].wind.deg,
        feels_like: Math.round(res.data.list[index].main.feels_like),
        gust: Math.round(res.data.list[index].wind.gust)
      }
    })
    weatherInfo.value = weatherData; weatherData.splice(1, 7); weatherData.splice(2, 7); weatherData.splice(3, 7); weatherData.splice(4, 7); weatherData.splice(5, 6);
  })
}
</script>