import React from 'react'
import Squares from './Squares'
import Buttons from './Buttons'

class App extends React.Component {
    constructor() {
        super()
         this.state = {
             colors: ['white', 'white', 'white', 'white'],
             text: ['square1', 'square2', 'square3', 'square4']
         }
         this.hndlBtn1 = this.hndlBtn1.bind(this)
    }
    // newHB1 = () => {
    //     this.setState({colors})
    // }
    hndlBtn1(){
            let colors1 = ['white', 'white', 'white', 'white']
            if(this.state.colors[0] === 'white') {
                    colors1 = ['black', 'black', 'black', 'black']
            }
            this.setState(prevState => {
                return {
                    colors: colors1
            }
        })
    }
    
    render() {
        const grid = {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '100px 100px',
            justifyContent: 'center',
            alignItems: 'center',
        }
        const topLeft = {
            gridColumn: '1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderStyle: 'solid',
            borderColor: 'orange'
        }
        const topRight = {
            gridColumn: '2',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderStyle: 'solid',
            borderColor: 'yellow'
        }
        const bottomLeft = {
            gridColumn: '1',
            gridRow: '2',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderStyle: 'solid',
            borderColor: 'blue'
        }
        const bottomRight = {
            gridColumn: '2',
            gridRow: '2',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderStyle: 'solid',
            borderColor: 'green'
        }
        const buttonsGrid = {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '100px 100px',
            justifyContent: 'center',
            alignItems: 'center',
        }
        return (
            <div>
                <div style={grid}>
                    <div style={topLeft}>
                        <Squares 
                        color={this.state.colors[0]}
                        text={this.state.text[0]}
                        />
                    </div>
                    <div style={topRight}>
                        <Squares 
                        color={this.state.colors[1]}
                        text={this.state.text[1]}
                        />
                    </div>
                    <div style={bottomLeft}>
                        <Squares 
                        color={this.state.colors[2]}
                        text={this.state.text[2]}
                        />
                    </div>
                    <div style={bottomRight}>
                        <Squares 
                        color={this.state.colors[3]}
                        text={this.state.text[3]}
                        />
                    </div>
                </div>
                <div style={buttonsGrid}>
                    <button onClick={this.hndlBtn1}>Button 1</button>
                    <button onClick={this.hndlBtn2}>Button 2</button>
                    <button onClick={this.hndlBtn3}>Button 3</button>
                    <button onClick={this.hndlBtn4}>Button 4</button>
                    <button onClick={this.hndlBtn5}>Button 5</button>
                    <button onClick={this.hndlBtn6}>Button 6</button>
                    <button onClick={this.hndlBtn7}>Button 7</button>
                    <button onClick={this.hndlBtn8}>Button 8</button>
                </div>
         </div>
        )
    }
}

export default App