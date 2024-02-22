<template>
    <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm  md:mb-12 md:grid-cols-2 bg-white max-w-xl">
        <figure
            class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e ">
            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                <h3 class="text-lg font-semibold text-gray-900 ">Погода на сегодня</h3>
                <p class="my-4">тут что-то будет</p>
            </blockquote>
            <figcaption class="flex items-center justify-center ">
                <img class="rounded-full w-9 h-9" v-bind:src="weatherInfo[0].pic" alt="profile picture">
                <div class="space-y-0.5 font-medium  text-left rtl:text-right ms-3">
                    {{ weatherInfo[0].temp }}
                    <div class="text-sm text-gray-500  "> Ощущается как {{ weatherInfo[0].feels_like }}</div>
                </div>
            </figcaption>
        </figure>


        <figure
            class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg ">
            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                <h3 class="text-lg font-semibold text-gray-900 ">Ветер</h3>
                <p class="my-4">Возможны порывы до {{ weatherInfo[0].gust }} м/с</p>
            </blockquote>
            <figcaption class="flex items-center justify-center ">
                <img :style="{ transform: 'rotate(' + weatherInfo[0].deg + 'deg)' }" class="rounded-full w-9 h-9"
                    src="../assets/arrow.png" alt="profile picture">
                <div class="space-y-0.5 font-medium  text-left rtl:text-right ms-3">
                    <div v-if="weatherInfo[0].deg > 0">Южный</div>
                    <div class="text-sm text-gray-500 ">{{ weatherInfo[0].wind }} м/с</div>
                </div>
            </figcaption>
        </figure>


        <figure
            class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e ">
            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                <h3 class="text-lg font-semibold text-gray-900 ">Mindblowing workflow</h3>
                <p class="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your
                    next application."</p>
            </blockquote>
            <figcaption class="flex items-center justify-center ">
                <img class="rounded-full w-9 h-9"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture">
                <div class="space-y-0.5 font-medium  text-left rtl:text-right ms-3">
                    <div>Jese Leos</div>
                    <div class="text-sm text-gray-500 ">Software Engineer at Facebook</div>
                </div>
            </figcaption>
        </figure>


        <figure
            class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg ">
            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                <h3 class="text-lg font-semibold text-gray-900 ">Efficient Collaborating</h3>
                <p class="my-4">You have many examples that can be used to create a fast prototype for your team."</p>
            </blockquote>
            <figcaption class="flex items-center justify-center ">
                <img class="rounded-full w-9 h-9"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                    alt="profile picture">
                <div class="space-y-0.5 font-medium  text-left rtl:text-right ms-3">
                    <div>Joseph McFall</div>
                    <div class="text-sm text-gray-500 ">CTO at Google</div>
                </div>
            </figcaption>
        </figure>
    </div>

    <button @click="console.log(weatherInfo)">test1</button>
</template>
  
<script setup>
import axios from 'axios'
import { ref, inject, watch, onMounted } from 'vue'





const city = inject("city")
const weatherInfo = inject("weatherInfo")


defineProps({
    type: Object,
    required: true
})



// onMounted(() => getWeather())
</script>