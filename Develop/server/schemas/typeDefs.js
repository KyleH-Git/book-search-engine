const typeDefs = `
    type User {
        _id: ID!
        username: String!
        email: String!
        savedBooks: [Book]
    }

    type Book{
        bookId: String!
        authors: [String]!
        description: String!
        title: String!
        image: String!
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    input BookInput{
        authors: [String]!
        description: String!
        title: String!
        bookId: String!
        image: String!
        link: String
    }

    type Query {
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveBook(bookData: BookInput): User
        removeBook(bookID: String!): User
    }
`;

module.exports = typeDefs;