class CityForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: "",

        }
        
        this.handleSubmit() = this.handleSubmit.bind(this);
        this.handleChange() = this.handleChange.bind(this);

    }

handleSubmit(event) {
    alert("submit!!!" + this.state.value)
}

handleChange(event) {
    this.setState({value: event.target.value})
    alert("handled change: " + this.state.value)
}

    render() {
        return (

            <div>
            <form onSubmit={this.handleSubmit} onKeyUp={this.handleChange}>
            <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
            </div>

        )
    }
}





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CityForm />);
