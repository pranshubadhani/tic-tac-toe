import React from 'react'

const Square = (props) => {
    return (
        <div
            className='square'
            style={{
                border: '1px solid black',
                height: '100px',
                width: '100px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '30px',
                color: 'red'
            }}
            onClick={props.onClick}
        >
            <h4>{props.value}</h4>
        </div>
    )
}

export default Square