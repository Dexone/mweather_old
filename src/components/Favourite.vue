<template>
    <div class="px-4 py-3 text-sm text-gray-900">
        <a class="font-medium truncate">Избранные города

       
                <svg v-if="loading > 0" class="w-5 h-5 text-gray-200 animate-spin fill-blue-600 inline-block" viewBox="0 0 100 101"
                    fill="none">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor" />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill" />
                </svg>
        </a>



    </div>





    <ul class="py-2 text-sm text-gray-700">
        <li v-for="favourite, index in favouriteCity">
            <a class="block px-4 py-2 hover:bg-gray-100 ">
                <table>
                    <tr>
                        <td class="w-9">
                            <img class="w-6 h-6 inline-block" v-bind:src="favouriteWeather.pic[index]">
                        </td>
                        <td class="w-7">
                            {{ favouriteWeather.temp[index] }}°
                        </td>
                        <td>
                            <a @click="city = 'q=' + favourite, inputCity = favourite">{{ favourite }}</a>
                            <button class="items-end" @click="favouriteCity.splice(index, 1)">&nbsp;✕</button>
                        </td>
                    </tr>
                </table>
            </a>
        </li>
    </ul>

</template>

<script setup>
import { inject, ref, watch } from 'vue'
import { useStorage } from '@vueuse/core'
import axios from 'axios'


const favouriteWeather = ref({ pic: [], temp: [] })





defineProps({
    type: Object,
    required: true
})

const inputCity = inject("inputCity")
const city = inject("city")
const favouriteCity = inject("favouriteCity")


const state = useStorage('vue-use-local-storage', favouriteCity)



const loading = ref(0)
function update() {
    favouriteWeather.value.pic.length = 0
    favouriteWeather.value.temp.length = 0

    for (let i = 0; i < favouriteCity.value.length; i++) {
        loading.value = favouriteCity.value.length
        setTimeout(() => {
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${favouriteCity.value[i]}&units=metric&appid=dd942f90e8c353bb0a469a7db5bbb3d4`).then((res) => {
                favouriteWeather.value.pic.push(import.meta.env.BASE_URL + "/min/" + res.data.list[0].weather[0].main + ".png")
                favouriteWeather.value.temp.push(Math.round(res.data.list[0].main.temp))
                loading.value = loading.value - 1
            })
        }, i * 300);

    }
}

watch(favouriteCity.value, () => {
    update()
})

update()



</script>