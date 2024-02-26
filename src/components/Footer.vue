<template>
    <div class="grid h-full max-w-lg grid-cols-5 mx-auto">
        <button @click="topFunction" data-tooltip-target="tooltip-home" type="button"
            class="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 ">
            <!-- <svg class="w-5 h-5 mb-1 text-gray-500  group-hover:text-blue-600 " aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path
                    d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg> -->
            <svg class="w-[30px] h-[30px] text-gray-500" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 6v13m0-13 4 4m-4-4-4 4" />
            </svg>
            <span class="sr-only">Home</span>
        </button>
        <div id="tooltip-home" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip ">
            Home
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>







        <button @click=latlong data-tooltip-target="tooltip-wallet" type="button"
            class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 ">
            <svg class="w-6 h-6 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 24 24">
                <path fill-rule="evenodd"
                    d="M12 2a8 8 0 0 1 6.6 12.6l-.1.1-.6.7-5.1 6.2a1 1 0 0 1-1.6 0L6 15.3l-.3-.4-.2-.2v-.2A8 8 0 0 1 11.8 2Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    clip-rule="evenodd" />
            </svg>

            <span class="sr-only">Wallet</span>
        </button>
        <div id="tooltip-wallet" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip ">
            Wallet
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>













        <div class="flex items-center justify-center">
            <input @input="name" type="email" id="inp" aria-describedby="helper-text-explanation"
                class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Город">
            <!-- w-full -->
        </div>
        <div id="tooltip-new" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip ">
            Create new item
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>























        <button @click="name" data-tooltip-target="tooltip-settings" type="button"
            class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 ">
            <svg class="w-6 h-6 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
            </svg>

            <span class="sr-only">Settings</span>
        </button>
        <div id="tooltip-settings" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip ">
            Settings
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>





        <button v-if="syncCity" @click=" favouriteCity.splice(favouriteCity.indexOf(weatherInfo[0].city), 1)"
            data-tooltip-target="tooltip-profile" type="button"
            class="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50  group">

            <svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 24 24">
                <path
                    d="m12.7 20.7 6.2-7.1c2.7-3 2.6-6.5.8-8.7A5 5 0 0 0 16 3c-1.3 0-2.7.4-4 1.4A6.3 6.3 0 0 0 8 3a5 5 0 0 0-3.7 1.9c-1.8 2.2-2 5.8.8 8.7l6.2 7a1 1 0 0 0 1.4 0Z" />
            </svg>
            <span class="sr-only">Избранное</span>
        </button>



        <button v-else @click="favouriteCity.push(weatherInfo[0].city)" data-tooltip-target="tooltip-profile" type="button"
            class="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg class="w-6 h-6 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
            </svg>
            <span class="sr-only">Избранное</span>
        </button>











        <div id="tooltip-profile" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip ">
            Избранное
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
</template>


<script setup>
import { inject, watch, ref } from 'vue'

defineProps({
    type: Object,
    required: true
})
const weatherInfo = inject("weatherInfo")
const city = inject("city")
const favouriteCity = inject("favouriteCity")
// let syncCity = inject("syncCity")
let syncCity = ref()


function latlong() {
    navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        city.value = "lat=" + lat + "&lon=" + lon
    });
}

function name() {
    let inputCity = document.querySelector("#inp").value
    city.value = "q=" + inputCity
}


function syncCityFunction() {
    syncCity.value = (favouriteCity.value.includes(weatherInfo.value[0].city))
    console.log(syncCity.value)
}

watch(weatherInfo, () => {
    syncCityFunction()
})
watch(favouriteCity.value, () => {
    syncCityFunction()
})




function topFunction() {
    document.body.scrollTop = 0; // Для Safari
    document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
}

</script>