import React from 'react'

class Squares extends React.Component {
    render() {
        const square = {
            color: 'green',
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        }
        return(
            <div style={square}>
                Square
                {this.props.color}
                {this.props.shape}
                {this.props.text}
            </div>
        )
    }
}

export default Squares