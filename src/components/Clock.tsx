import React, { Component } from 'react'
type ClockState = { // TYPE ALIAS for state
    time: Date // Date is a type built into TS just like string, number, etc.
}

type AcceptedProps = { // TYPE ALIAS for props
    testProp: string,
    optionalProp?: string, //the "?" after the optionalProp property denotes that this prop is optional
}

class Clock extends Component<AcceptedProps, ClockState> { //<--Inside the carrots is where we pass in props to our component, as well as where we pass in the state. 
    constructor(props: AcceptedProps) {                    // If we're not passing in any props, and we're not passing in any state, the default values passed into the component are empty objects
        super(props)                                       // Props are always passed to the components first likeso <{}, {}>. Object are empty since we're not passing any props at the moment
        this.state = {
            time: new Date(),
        }
    }

    // tick() {
    //     this.setState({
    //         time: new Date()
    //     })
    // }                            //Tick() and componentWillMount() for this example is just another way to initialize a state

    // componentWillMount(){ 
    //     this.tick();                  
    // }

    componentDidMount(){
        setInterval(() => {
            this.setState({time: new Date()})
        }, 1000)
    }

    render() {
        return (
            <div>
                <h1>{this.state.time.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default Clock;