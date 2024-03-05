<template>
  <!-- max-w-screen-xl -->
  <main class="bg-white rounded-lg shadow max-w-4xl mx-auto">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">



      <nav class="bg-white border-gray-200 ">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl  pb-5">
          <a href="https://dexone.github.io/mweather/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="../public/logo.png" class="h-8" />
            <span
              class="self-center text-2xl font-semibold whitespace-nowrap underline underline-offset-3 decoration-4 decoration-blue-400">mweather</span>
          </a>


          <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="#" @click="showModal = !showModal" class="text-sm  text-gray-500  hover:underline">О
              приложении</a>
          </div>
        </div>
      </nav>





      <!-- Main modal -->
      <div id="default-modal" tabindex="-1" aria-hidden="true" :class="{ 'hidden': showModal }"
        class=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ">
        <div class="relative p-4 w-full max-w-2xl max-h-full mx-auto">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow ">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <h3 class="text-xl font-semibold text-gray-900 ">
                О приложении
              </h3>
              <button @click="showModal = !showModal" type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center ">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4">

              <p class="text-base leading-relaxed text-gray-500 ">
                Это приложение разработано Dexone и включает в себя функции отображения прогноза погоды на 5 дней,
                подробного прогноза на выбранный день и графика температуры на 24 часа. Есть возможность добавить город
                в
                избранное с
                сохранением при перезагрузке страницы, уточнить местоположение по геолокации или ввести название города
                в
                поисковую строку.
              </p>
            </div>


          </div>
        </div>
      </div>








      <!-- grid mb-8 border border-gray-200 rounded-lg shadow-sm  md:mb-12 md:grid-cols-2 bg-white max-w-xs inline-block -->

      <div class=" max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8  mb-3 mx-auto">
        <Weather5day />
      </div>

      <div class="max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6   mb-3 mx-auto">
        <Details />
      </div>



      <div class="max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow mb-3 mx-auto">
        <Graph />
      </div>



      <div class="max-w-4xl bg-white divide-y divide-gray-100 rounded-lg shadow  mx-auto ">
        <Favourite />
      </div>




      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center ">© 2024 <a href="https://github.com/Dexone"
          class="hover:underline">Dexone</a>. All Rights Reserved.</span>
    </div>



  </main>

  <div
    class="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 ">
    <Footer />
  </div>
</template>


<script setup>
import Weather5day from "./components/Weather5day.vue"
import Favourite from "./components/Favourite.vue"
import Footer from "./components/Footer.vue"
import Graph from "./components/Graph.vue"
import Details from "./components/Details.vue"
import axios from 'axios'
import { provide, ref, watch, onMounted, watchEffect } from 'vue'


const city = ref("q=Москва")
provide("city", city)





const showModal = ref(true)








const weatherInfo = ref([{ dt_txt: "loading", day: "loading", pic: "loading", temp: "loading", wind: "loading", grnd: "loading", visibility: "loading", humidity: "loading", pop: "loading", deg: "0", feels_like: "0", gust: "0", city: "0", number: "0", week: "0", date: "0" }])
provide("weatherInfo", weatherInfo)

let graphInfo = ref([])
provide("graphInfo", graphInfo)





const inputCity = ref('')
provide("inputCity", inputCity)



const favouriteCity = ref(["Киров", "Москва", "Пермь", "Екатеринбург", "Казань"])
provide("favouriteCity", favouriteCity)



let detailsIndex = ref(0)
provide("detailsIndex", detailsIndex)

watchEffect(() => {
  city

  detailsIndex.value
  getWeather()
})




function getWeather() {

  let week = []
  let date = []
  let count = 1
  let indexMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  let indexNed = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
  for (let i = 0; i < 40; i++) {
    let d = new Date(new Date().getTime() + count * 60 * 60 * 1000);
    let Month = d.getMonth();
    let Ned = d.getDay();
    let Day = d.getDate();
    week.push(indexNed[Ned])
    date.push(Day + " " + indexMonth[Month])
    count = count + 3
  }


  const cityValue = city.value
  axios.get(`https://api.openweathermap.org/data/2.5/forecast?${cityValue}&units=metric&appid=dd942f90e8c353bb0a469a7db5bbb3d4`).then((res) => {
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
        number: index,
        week: week[index],
        date: date[index]
      }
    })
    weatherInfo.value = weatherData;

  })
}


getWeather()
</script>
