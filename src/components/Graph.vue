<template>
    <LineChart :chartData="lineData" />
</template>

<script setup>
import axios from 'axios'
import Chart from 'chart.js/auto';
import { LineChart } from "vue-chart-3"
import { computed, inject } from 'vue'
const city = inject("city")
defineProps({
    type: Object,
    required: true
})



const graphInfo = inject("graphInfo")
const selectedCity = inject("selectedCity")


const lineData = computed(() => ({
    labels: graphInfo.value.x,
    boxWidth: 0,
    datasets: [
        {
            data: graphInfo.value.y,
            label: 'График температуры на ' + selectedCity.value.date[selectedCity.value.nx],
            borderColor: 'rgb(55, 65, 81)', //цвет линии
            borderWidth: 1, // толщина линии
            backgroundColor: 'rgba(255, 255, 255, 0.0)', //точки
        },
    ],
}));

</script>