const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]!
  }

  type Auth {
    token: ID!
    profile: User
  }

  type Query {
    
    me: User
  }

  type Book {
    _id:ID
    title: String
    link:String
    forSale: String
    image: String
    bookId : String
    description : String
    authors: [String]
  }
  input SavedBookInput {
    _id:ID
    title: String
    link:String
    forSale: String
    image: String
    bookId : String
    description : String
    authors: [String]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth

    saveBook(book: SavedBookInput): User
    
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
