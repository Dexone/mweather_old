<template>


<div v-if="osnStore.loaderGetWeather === true" class="  rounded animate-pulse ">
    <div class="flex items-baseline mt-4">
        <div class="w-full bg-gray-200 rounded-t-lg h-72 "></div>
        <div class="w-full h-56 ms-6 bg-gray-200 rounded-t-lg "></div>
        <div class="w-full bg-gray-200 rounded-t-lg h-72 ms-6 "></div>
        <div class="w-full h-64 ms-6 bg-gray-200 rounded-t-lg "></div>
        <div class="w-full bg-gray-200 rounded-t-lg h-80 ms-6"></div>
        <div class="w-full bg-gray-200 rounded-t-lg h-72 ms-6"></div>
        <div class="w-full bg-gray-200 rounded-t-lg h-80 ms-6"></div>
    </div>
</div>

    <LineChart v-if="osnStore.loaderGetWeather === false" :chartData="lineData" />
</template>

<script setup>
import axios from 'axios'
import Chart from 'chart.js/auto';
import { LineChart } from "vue-chart-3"
import { computed, inject, watch, ref } from 'vue'
import { useOsn } from '../../store/osn.js';
const osnStore = useOsn();
defineProps({
    type: Object,
    required: true
})


const graphInfo = ref({ x: [], y: [] })
const detailsIndex = inject("detailsIndex")


watch([detailsIndex, osnStore], () => {
    let b = detailsIndex.value
    if(osnStore.weatherInfo[0].dt_txt !== "loading"){
    for (let i = 0; i < 7; i++) {
        graphInfo.value.x[i] = osnStore.weatherInfo[b].dt_txt.slice(11, -6);
        graphInfo.value.y[i] = osnStore.weatherInfo[b].temp
        b++
    }}

})




const lineData = computed(() => ({
    labels: graphInfo.value.x,
    boxWidth: 0,
    datasets: [
        {
            data: graphInfo.value.y,
            label: 'График температуры на ' + osnStore.weatherInfo[detailsIndex.value].date,
            borderColor: 'rgb(55, 65, 81)', //цвет линии
            borderWidth: 1, // толщина линии
            backgroundColor: 'rgba(255, 255, 255, 0.0)', //точки
        },
    ],
}));

</script>