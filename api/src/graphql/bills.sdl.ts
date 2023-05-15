export const schema = gql`
  type User {
    id: Int!
    email: String!
    role: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    pharmacistProfile: PharmacistProfile
    customerProfile: CustomerProfile
  }

  type InventoryItem {
    id: Int!
    name: String!
    description: String
    quantity: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    pharmacistProfile: PharmacistProfile!
    pharmacistProfileId: Int!
    bill: Bill
    billId: Int
  }

  type Bill {
    id: Int!
    total: Float!
    createdAt: DateTime!
    updatedAt: DateTime!
    inventoryItems: [InventoryItem]!
    customerProfile: CustomerProfile
    customerProfileId: Int
  }

  type PharmacistProfile {
    id: Int!
    user: User!
    inventoryItems: [InventoryItem!]!
  }

  type CustomerProfile {
    id: Int!
    user: User!
    bills: [Bill!]!
  }

  type Query {
    bills: [Bill!]! @requireAuth
    bill(id: Int!): Bill @requireAuth
  }

  input CreateBillInput {
    total: Float!
    customerProfileId: Int
  }

  input UpdateBillInput {
    total: Float
    customerProfileId: Int
  }

  type Mutation {
    createBill(input: CreateBillInput!): Bill! @requireAuth
    updateBill(id: Int!, input: UpdateBillInput!): Bill! @requireAuth
    deleteBill(id: Int!): Bill! @requireAuth
  }
`
