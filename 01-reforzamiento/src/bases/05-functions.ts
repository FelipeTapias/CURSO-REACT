function greet(name: string): string {
    return `Hola ${name}`
}

const greet2 = (name: string) => `Hola ${name}`;


const message = greet('Felipe');
const message2 = greet2('Andres');

console.log(message, message2);

function getUser() {
    return {
        uid: 'ABC-123',
        username: 'El_Papi123'
    }
}

interface User {
    uid: string;
    username: string;
}

const getUser2 = (): User => ({
                uid: 'ABC-123',
                username: 'El_Papi123'
            })


const user = getUser();
const user2 = getUser2();

console.log(user);
console.log(user2);

const myNumbers: number[] = [1,2,3,4,5];
// myNumbers.forEach(function(value) {
//     console.log({value});    
// })

// myNumbers.forEach((value) => console.log({value}));

// myNumbers.forEach(console.log);

myNumbers.forEach((value, index, arr) => 
        console.log(value, index, arr)); 