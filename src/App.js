import React from 'react'
import Squares from './Squares'
import Buttons from './Buttons'

class App extends React.Component {
    constructor() {
        super()
         this.state = {
             colors: ['white', 'white', 'white', 'white'],
        //     shape: [square, square, square, square],
             text: ['square1', 'square2', 'square3', 'square4']
         }
         this.hndlBtn1 = this.hndlBtn1.bind(this)
    }
    hndlBtn1(){
        this.setState(prevState => {
            if(prevState.colors === 'white'){
                return {
                    colors: ['black', 'black', 'black', 'black']
                }
            }else {
                return {
                    colors: ['white', 'white', 'white', 'white']
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
        }
        const bottomLeft = {
            gridColumn: '1',
            gridRow: '2',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
        const bottomRight = {
            gridColumn: '2',
            gridRow: '2',
            display: 'flex',
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
                <div>
                    <Buttons />
            </div>
         </div>
        )
    }
}

export default App