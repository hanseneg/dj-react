import React from 'react'

class Buttons extends React.Component {
    render() {
        const buttonsGrid = {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '100px 100px',
            justifyContent: 'center',
            alignItems: 'center',
        }
        return(
            <div style={buttonsGrid}>
                <button>Button{this.props.text}</button>
            </div>
        )
    }
}

export default Buttons