const { UserList , MovieList } = require("../schema/FakeData")
const _ = require("lodash")


const resolvers = {

    Query: {
        // USER RESOLVERS
        users: () => {

            return UserList;
        },
        user: (parent, args, contents) => {
            // console.log(args);
            const id = args.id;
            const user = _.find(UserList, { id : Number(id)} );
            return user;
            
        },
        // MOVIE RESOLVERS
        movies: () => {
            return MovieList;

        },
        movie: (parent, args, contents) => {
            const name = args.name;
            const movie = _.find(MovieList, { name } );
            return movie;
        }
    },

    User: {
        favorateMovies: () => {
            return _.filter( MovieList , 
                ( movie ) => 
                movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010 

            );
        }
    },
    Mutation: {
        createUser: (parent, args, contents) => {
            const user = args.input
            const lastId = UserList[UserList.length - 1].id;
            user.id = lastId + 1;
            UserList.push(user);
            return user;
        },
        updateUsername: (parent, args, contents) => {
           const { id , newUsername } = args.input
           let userUpdated;
    
           UserList.forEach((user)=>{
                if(user.id == id){
                    user.username = newUsername;
                    userUpdated = user;
                }
           });
            
           return userUpdated;
        }
    }
};

module.exports = {resolvers}
