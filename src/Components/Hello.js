import React from 'react'

const  Hello = () => {
    return React.createElement(
        'div', 
        {id : 'hello', class: 'dummy class'},
        React.createElement('h1', null, 'Hello Prabhagar'))
}

export default Hello