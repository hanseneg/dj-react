import React from 'react'
import Squares from './Squares'
import Buttons from './Buttons'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            colors: [white, white, white, white],
            shape: [square, square, square, square],
            text: [white, white, white, white]
        }
    }
    render() {
        return (
            <div>
                <Squares />
                <Buttons />
            </div>
        )
    }
}

export default App