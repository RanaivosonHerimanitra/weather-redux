import React , {Component} from "react"
import SearchBar from '../containers/search_bar'

export default class App extends Component {
    
    render() {
        return (
            <div>
                Hello world <SearchBar/>
            </div>
        )
    }
}
//ReactDOM.render(<App/>,document.getElementById("id"))