import axios from "axios"
const API_KEY="398eaa6647e9a1da45cc18709f53afe5"
const ROUTE_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
//middleware modifieur/intercepteur d'actions
export const FETCH_WEATHER ="FETCH_WEATHER"
export function fetchWeather(city) {
    const query_url = `${ROUTE_URL}&q=${city}`
    const request = axios.get(query_url)
    console.log("request==>",request)
    return {
        type:FETCH_WEATHER,
        payload:request
    }
}