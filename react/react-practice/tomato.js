class Toggle extends React.Component {
        constructor(props) {
            super(props)
            this.state={
                allisonIsCool: true,
                fruit: 'banana',
                number: 7,
                name: 'Rebekah',
                favFruit: 'watermelon',
                num2: 25,
                list: ['a', 'b', 'c'],
                isToggleOn: true,
                value: ''
            }
            this.handleClick = this.handleClick.bind(this)
            this.onChange = this.onChange.bind(this)
        }
        
        handleClick(event) {
            // alert('Watch out')
            if(this.state.isToggleOn==true) {
                this.setState({isToggleOn: false})
            }
            else {
                this.setState({isToggleOn: true})
            }
            console.log(this.state.isToggleOn)
        }
        
        onChange(event) {
            this.setState({value: event.target.value})
            console.log(this.state.value)
        }
        
        render() {
            return(
                <div>
                    <h1> Fruits I like </h1>
                    <p> I like apples</p>
                    <ol>
                        <li>apples</li>
                        <li>are cool</li>
                        <li>{this.state.fruit}</li>
                        <li>{this.state.number}</li>
                        <li>{this.state.favFruit}</li>
                        <li>{this.state.num2}</li>
                        <li>{this.state.list}</li>
                    </ol>
                    
                    <button onClick = {this.handleClick}>{this.state.isToggleOn?'hello': 'goodbye'}</button>
                    
                    <form>
                        <input type = 'text' value = {this.state.value} onChange = {this.onChange}/>
                        <input type = 'submit' value = 'go'/>
                    </form>
                    
                    <p>{this.state.value}</p>
                    <p>{this.state.value}</p>
                    <p>{this.state.value}</p>
                    <p>{this.state.value}</p>
                    <p>{this.state.value}</p>
                    <p>{this.state.value}</p>
                    <p>{this.state.value}</p>
                    <p>{this.state.value}</p>
                    <p>{this.state.value}</p>
                    <p>{this.state.value}</p>
                    <p>{this.state.value}</p>
                    <p>{this.state.value}</p>
                    
                </div>
            )
        }
    }
    
    const root = ReactDOM.createRoot(document.getElementById('mydiv'))
    root.render(<Toggle/>)
    
    
    
    
    
    
    //TRY DOING THIS ALL BY YOURSELF