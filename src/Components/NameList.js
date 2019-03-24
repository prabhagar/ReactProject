import React from 'react'
import Person from './Person';

function NameList() {
    const names = ['Bruce', 'Diana', 'Clark','Bruce']

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
    
    const nameList = names.map((name, index) => <h2  key={index}>{index} {name}</h2>)
//   return (
    // <div>{
        // nameList
    //    const personList= persons.map(person => <Person key={person.name} person = {person} />)
    //    return <div>{personList}</div>
        return <div>{nameList}</div>
    // }
    // </div>
//   )
}

export default NameList
