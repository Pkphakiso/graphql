const UserList = [
    {
        id:1,
        name:"john",
        username:"john",
        age:20,
        nationality:"CAMERON",
        friends:[
            {
                id:2,
                name:"Petro",
                username:"PetroTech",
                age:20,
                nationality:"BRAZIL"
            },
            { 
                id:3,
                name:"Sarah",
                username:"Cameron",
                age:25,
                nationality:"INDIA"
            }
        ]

    },
    {
        id:2,
        name:"Petro",
        username:"PetroTech",
        age:20,
        nationality:"BRAZIL"
    },
    { 
        id:3,
        name:"Sarah",
        username:"Cameron",
        age:25,
        nationality:"INDIA",
        friends:[
            {
                id:2,
                name:"Petro",
                username:"PetroTech",
                age:20,
                nationality:"BRAZIL"
            }
        ]
    },
    { 
        id:4,
        name:"Rafe",
        username:"",
        age:60,
        nationality:"GERMENY"
    },
    {
        id:5,
        name:"Kelly",
        username:"Kelly2019",
        age:5,
        nationality:"CHILE"
    }
];

const MovieList =[
    {
        id:1,
        name: "Avengers Endgame",
        yearOfPublication:2019,
        isInTheaters: true,
    },
    {
        id:3,
        name: "Interstellar",
        yearOfPublication:2007,
        isInTheaters: true,
    },
    {
        id:3,
        name: "Superbad",
        yearOfPublication:2009,
        isInTheaters: true,
    },
    {
        id:4,
        name: "Pk The Movie",
        yearOfPublication:2035,
        isInTheaters: false,
    },
];

module.exports = { UserList , MovieList};