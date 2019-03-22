import React from 'react'
import Person from './Person';

function NameList() {
    const names = ['Bruce', 'Diana', 'Clark']

    const persons = [
        {
            id:1,
            name:'Bruce',
            age: 23,
            skill: 'Java'
        },
        {
            id:1,
            name:'Diana',
            age: 26,
            skill: 'Angular'
        },
        {
            id:1,
            name:'Clark',
            age: 24,
            skill: 'React'
        }

    ]
    
    // const nameList = names.map(name => <h2>{name}</h2>)
//   return (
    // <div>{
        // nameList
       const personList= persons.map(person => <Person person = {person} />)
       return <div>{personList}</div>
    // }
    // </div>
//   )
}

export default NameList
