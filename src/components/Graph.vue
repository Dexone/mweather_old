<template>
    <LineChart :chartData="lineData" />
</template>

<script setup>
import axios from 'axios'
import Chart from 'chart.js/auto';
import { LineChart } from "vue-chart-3"
import { computed, inject, watch, ref } from 'vue'

defineProps({
    type: Object,
    required: true
})


const graphInfo = ref({ x: [], y: [] })
const weatherInfo = inject("weatherInfo")
let detailsIndex = inject("detailsIndex")


watch(weatherInfo, () => {
    let b = detailsIndex.value
    for (let i = 0; i < 8; i++) {
        graphInfo.value.x[i] = weatherInfo.value[b].dt_txt.slice(11, -6);
        graphInfo.value.y[i] = weatherInfo.value[b].temp
        b++
    }

})




const lineData = computed(() => ({
    labels: graphInfo.value.x,
    boxWidth: 0,
    datasets: [
        {
            data: graphInfo.value.y,
            label: 'График температуры на ' + weatherInfo.value[detailsIndex.value].date,
            borderColor: 'rgb(55, 65, 81)', //цвет линии
            borderWidth: 1, // толщина линии
            backgroundColor: 'rgba(255, 255, 255, 0.0)', //точки
        },
    ],
}));

</script>