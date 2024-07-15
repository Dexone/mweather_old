import { defineStore } from 'pinia';
import axios from 'axios';
import { ref, watch } from 'vue'

export const useOsn = defineStore('osnStore', {
    state: () => ({
        weatherInfo: ([{ dt_txt: "loading", day: "loading", pic: "loading", temp: "loading", wind: "loading", grnd: "loading", visibility: "loading", humidity: "loading", pop: "loading", deg: "0", feels_like: "0", gust: "0", city: "0", sunrise: "0", sunset: "0", number: "0", week: "0", date: "0"}]), city: 'q=Екатеринбург', loaderGetWeather: true
    }),


    getters: {
        getWeatherInfo: (state) => state.weatherInfo,
      },
    actions: {
        getWeather() {
            this.loaderGetWeather = true
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

            axios.get(`https://api.openweathermap.org/data/2.5/forecast?${this.city}&units=metric&appid=dd942f90e8c353bb0a469a7db5bbb3d4`).then((res) => {

                this.weatherInfo = res.data.list.map((item, index) => {

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
                        sunrise: res.data.city.sunrise,
                        sunset: res.data.city.sunset,
                        number: index,
                        week: week[index],
                        date: date[index]

                        
                    }


                })

                //   weatherInfo.value = weatherData;
                console.log(this.weatherInfo[0].city)
            })


            setTimeout(() => {
                this.loaderGetWeather = false
            }, 500);



        }
    }
}
)