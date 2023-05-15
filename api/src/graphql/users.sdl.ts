export const schema = gql`
  type User {
    id: Int!
    email: String!
    password: String!
    role: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    pharmacistProfile: PharmacistProfile
    customerProfile: CustomerProfile
  }

  type PharmacistProfile {
    id: Int!
    user: User!
    # Add any additional fields specific to pharmacists
  }

  type CustomerProfile {
    id: Int!
    user: User!
    # Add any additional fields specific to customers
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    password: String!
    role: String!
  }

  input UpdateUserInput {
    email: String
    password: String
    role: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
