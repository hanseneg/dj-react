import React from 'react'

class Squares extends React.Component {
    render() {
        const squaresGrid = {
            backgroundColor: `${this.props.color}`,
            // color: 
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        }
        return(
            <div style={squaresGrid}>
                {this.props.text}
            </div>
        )
    }
}

export default Squares