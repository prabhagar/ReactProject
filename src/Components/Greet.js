import React from 'react'

export const Greet = props => {
    return (
        <div>
            <h1>
                Hello {props.name} aka {props.heroName}
            </h1>
            {props.children}
        </div>
    )
}

// export const Greet = () => <h1>Hello Prabhagar</h1>

// export default Greet