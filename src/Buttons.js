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
                <button>Button1</button>
                <button>Button2</button>
                <button>Button3</button>
                <button>Button4</button>
                <button>Button5</button>
                <button>Button6</button>
                <button>Button7</button>
                <button>Button8</button>
            </div>
        )
    }
}

export default Buttons