import React from 'react'
import Squares from './Squares'
import Buttons from './Buttons'

class App extends React.Component {
    constructor() {
        super()
         this.state = {
             colors: ['white', 'white', 'white', 'white'],
             text: ['Square 1', 'Square 2', 'Square 3', 'Square 4'],
             textColors: ['black', 'black', 'black', 'black']
         }
         this.hndlBtn1 = this.hndlBtn1.bind(this)
         this.hndlBtn2 = this.hndlBtn2.bind(this)
         this.hndlBtn3 = this.hndlBtn3.bind(this)
         this.hndlBtn4 = this.hndlBtn4.bind(this)
         this.hndlBtn5 = this.hndlBtn5.bind(this)
         this.hndlBtn6 = this.hndlBtn6.bind(this)
         this.hndlBtn7 = this.hndlBtn7.bind(this)
         this.hndlBtn8 = this.hndlBtn8.bind(this)
    }
    hndlBtn1(){
        this.setState(prevState => {
            if(this.state.colors[0] === 'white'){
                return {
                    colors: ['black', 'black', 'black', 'black'],
                    textColors: ['white', 'white', 'white', 'white']
                }
            }else {
                return {
                    colors: ['white', 'white', 'white', 'white'],
                    textColors: ['black', 'black', 'black', 'black']
                }
            }
        })
    }
    hndlBtn2(){
        this.setState(prevState => {
            if(this.state.colors[0] !== 'purple'){
                return {
                    colors: ['purple', 'purple', 'white', 'white']
                }
            }else {
                return {
                    colors: ['white', 'white', 'white', 'white']
                }
            }
        })
    }
    hndlBtn3(){
        this.setState(prevState => {
            if(this.state.colors[2] !== 'orange'){
                return {
                    colors: ['white', 'white', 'orange', 'white']
                }
            }else {
                return {
                    colors: ['white', 'white', 'white', 'white']
                }
            }
        })
    }
    hndlBtn4(){
        this.setState(prevState => {
            if(this.state.colors[3] !== 'green'){
                return {
                    colors: ['white', 'white', 'white', 'green']
                }
            }else {
                return {
                    colors: ['white', 'white', 'white', 'white']
                }
            }
        })
    }
    hndlBtn5(){
        this.setState(prevState => {
            if(this.state.textColors[0] !== 'red'){
                return {
                    textColors: ['red', 'black', 'black', 'black']
                }
            }else {
                return {
                    textColors: ['black', 'black', 'black', 'black']
                }
            }
        })
    }
    hndlBtn6(){
        this.setState(prevState => {
            if(this.state.textColors[1] !== 'yellow'){
                return {
                    textColors: ['black', 'yellow', 'black', 'black']
                }
            }else {
                return {
                    textColors: ['black', 'black', 'black', 'black']
                }
            }
        })
    }
    hndlBtn7(){
        this.setState(prevState => {
            if(this.state.textColors[2] !== 'pink'){
                return {
                    textColors: ['black', 'black', 'pink', 'black']
                }
            }else {
                return {
                    textColors: ['black', 'black', 'black', 'black']
                }
            }
        })
    }
    hndlBtn8(){
        this.setState(prevState => {
            if(this.state.textColors[3] !== 'gray'){
                return {
                    textColors: ['black', 'black', 'black', 'gray']
                }
            }else {
                return {
                    textColors: ['black', 'black', 'black', 'black']
                }
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
                        textColor={this.state.textColors[0]}
                        text={this.state.text[0]}
                        />
                    </div>
                    <div style={topRight}>
                        <Squares 
                        color={this.state.colors[1]}
                        textColor={this.state.textColors[1]}
                        text={this.state.text[1]}
                        />
                    </div>
                    <div style={bottomLeft}>
                        <Squares 
                        color={this.state.colors[2]}
                        textColor={this.state.textColors[2]}
                        text={this.state.text[2]}
                        />
                    </div>
                    <div style={bottomRight}>
                        <Squares 
                        color={this.state.colors[3]}
                        textColor={this.state.textColors[3]}
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