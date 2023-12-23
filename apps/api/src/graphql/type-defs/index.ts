export const typeDefs = `#graphql 
    type User {
        id: ID!
        name: String!
        username: String!
        email: String!
        phone: String!
        website: String!
    }

    type Todo {
        id: ID!
        title: String!
        completed: Boolean
        user: User
    }

    type Query {
        getUser(id: ID!): User
        getAllUsers: [User]
        getTodos: [Todo]
    }

    type Mutation {
        addTodo(image:String, title:String) : Todo
        updateTodo(id:ID!, title:String, image:String) : Todo
        deleteTodo(id:ID!) : Todo
        addUser(todoId:ID!, name:String): User
        deleteUser(id:ID!): User
      }
`;
