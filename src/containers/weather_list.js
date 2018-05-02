import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"

import Plot from 'react-plotly.js';
import {Sparklines,SparklinesLine} from 'react-sparklines'
class WeatherList extends Component {
    renderWeather(cityData) {
        const name =cityData.city.name
        const temperature = cityData.list.map(x=>x.main.temp)
        const humid = cityData.list.map(x=>x.main.humidity)
        console.log(temperature)
        return (
        <tr key={name}>
            <td>{name}</td>
            <td>
                <Sparklines width={180} height={120} data={temperature}>
                   <SparklinesLine color="red" />
                </Sparklines>
      </td>
        </tr>)  
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                      <tr>
                          <th>City</th>
                          <th>Temperature</th>
                          <th>Pressure</th>
                          <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
               </tbody>
            </table>
        )
    }
}

const mapStateToProps = ({weather}) => {
    return { weather } //{weather} ~ {weather:weather}
}

export default connect(mapStateToProps)(WeatherList)
