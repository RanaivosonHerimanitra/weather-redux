import React , {Component} from "react"

export default class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {term:""}
    }
    render() {
        return (
            <form className="input-group">
              <input 
                 placeholder="get a 5 day forecast in your favorite city"
                 className="form-control"
                 value ={this.state.term}
                 onChange={this.onInputChange}
                 />
              <span className="input-group-btn">
              <button type="submit" className="btn btn-secondary">submit</button>
              </span>
            </form>
        )
    }
}