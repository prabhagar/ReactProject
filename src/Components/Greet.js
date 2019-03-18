import React from 'react'

export const Greet = props => {
    const {name, heroName} =props
    return (
        <div>
            <h1>
                Hello {name} aka {heroName}
            </h1>
            {/* {props.children} */}
        </div>
    )
}

// export const Greet = () => <h1>Hello Prabhagar</h1>

// export default Greet