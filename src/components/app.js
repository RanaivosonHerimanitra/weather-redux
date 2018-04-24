import React , {Component} from "react"
import SearchBar from '../containers/search_bar'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {term:""}
    }
    render() {
        return (
            <div>
                Hello world <SearchBar/>
            </div>
        )
    }
}
//ReactDOM.render(<App/>,document.getElementById("id"))