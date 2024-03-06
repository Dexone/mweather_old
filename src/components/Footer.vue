<template>
    <div class="grid h-full max-w-lg grid-cols-5 mx-auto">

        <button @click="topFunction" 
            class="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50">
            <svg class="w-[30px] h-[30px] text-gray-500"
                fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 6v13m0-13 4 4m-4-4-4 4" />
            </svg>
        </button>

        <button @click=latlong 
            class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50">
            <svg class="w-6 h-6 text-gray-500" 
                fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd"
                    d="M12 2a8 8 0 0 1 6.6 12.6l-.1.1-.6.7-5.1 6.2a1 1 0 0 1-1.6 0L6 15.3l-.3-.4-.2-.2v-.2A8 8 0 0 1 11.8 2Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    clip-rule="evenodd" />
            </svg>
        </button>



        <div class="flex items-center justify-center">
            <input @input="city = 'q=' + inputCity, syncCity = (favouriteCity.includes(inputCity))" v-model="inputCity"
                type="email" id="inp"
                class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                placeholder="Город">
        </div>

        <button @click="name" 
            class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50">
            <svg class="w-6 h-6 text-gray-500 " fill="none"
                viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
            </svg>
        </button>



        <button v-if="syncCity" @click="favouriteCity.splice(favouriteCity.indexOf(inputCity), 1)"
            class="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 group">

            <svg class="w-6 h-6 text-gray-800 "
                fill="currentColor" viewBox="0 0 24 24">
                <path
                    d="m12.7 20.7 6.2-7.1c2.7-3 2.6-6.5.8-8.7A5 5 0 0 0 16 3c-1.3 0-2.7.4-4 1.4A6.3 6.3 0 0 0 8 3a5 5 0 0 0-3.7 1.9c-1.8 2.2-2 5.8.8 8.7l6.2 7a1 1 0 0 0 1.4 0Z" />
            </svg>
            <span class="sr-only">Избранное</span>
        </button>

        <button v-else @click="favouriteCity.push(inputCity)" 
            class="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 group">
            <svg class="w-6 h-6 text-gray-500 "  fill="none"
                viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
            </svg>
            <span class="sr-only">Избранное</span>
        </button>

    </div>
</template>


<script setup>
import { inject, ref, watchEffect } from 'vue'

defineProps({
    type: Object,
    required: true
})

const city = inject("city")
const favouriteCity = inject("favouriteCity")

let syncCity = ref()
const inputCity = inject("inputCity")


function latlong() {
    navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        city.value = "lat=" + lat + "&lon=" + lon
    });
}

watchEffect(() => {
    inputCity
    favouriteCity
    syncCity.value = (favouriteCity.value.includes(inputCity.value))
})


function topFunction() {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
    
}

</script>