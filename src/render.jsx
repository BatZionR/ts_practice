import { Numbers } from "./practice.ts"

export function Renderer () {

    let person = Numbers()

    //hover over 'Numbers' and use the types inferred to change the variables below to be the correct values
    var num = person.age
    var name = 'str'
    var phone = 45
    var street = 'eek'
    var streetNum = 1
    var city = 'Jlm'

    return (
        <>
        <h1>Hi there, my name is {name} and I am {num} years old</h1>
        <h1>You can reach me at {phone}</h1>
        <h1>Or if you want to stalk me, I'm at {street} {streetNum}, {city}</h1>
        </>
    )
}