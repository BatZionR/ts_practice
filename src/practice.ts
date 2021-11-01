export function Numbers () {

    // get rid of all the errors below, in any way you want
    let bigNum : number = 0
    let smallNum: number = 5000
    let combo : number = smallNum + bigNum
    let bigCombo : number = bigNum + '200'
    let string : string = '200'
    let bigString : string = '209348'+'hewwo'+'why are you staring'
    let boolean : boolean = true
    let bool : boolean = false
    let BOO : boolean = 0
    let bigBool : boolean = bool && boolean && BOO
    let num : number = 'str'
    let str : string = 58
    let BoolEan: boolean = 'hi'

    //Are the above variables assigned or inferred?
    //If you said assigned, you are correct. Now please change them all to be inferred types.


    //define a variable name Trueness and ASSIGN a type of 'boolean

    //define a variable name Mispar and let the code INFER that the type is number

    //define a set of variables, that when combined throw an error of 'type number is not assignable to type string'

    //try changing one of the above values
    //like this: combo = 'hewwo'




    //hover your mouse over the object below and look at the definition TypeScript INFERRED from the code
    let obJ = {
        user: 'str',
        name: 'batzion',
        age: 19.8,
        phoneNum: 589055814,
        hasHair: true,
        movesHouses: null,
        address: {
            number : 55,
            street: 'reuven',
            city: 'beit shemesh'
        }
    }
    return obJ
}