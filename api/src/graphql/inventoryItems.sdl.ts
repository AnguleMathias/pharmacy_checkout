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
    inventoryItem: InventoryItem
    customerProfile: CustomerProfile
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
    inventoryItems: [InventoryItem!]! @requireAuth
    inventoryItem(id: Int!): InventoryItem @requireAuth
  }

  input CreateInventoryItemInput {
    name: String!
    description: String
    quantity: Int!
    pharmacistProfileId: Int!
    billId: Int
  }

  input UpdateInventoryItemInput {
    name: String
    description: String
    quantity: Int
    pharmacistProfileId: Int
    billId: Int
  }

  type Mutation {
    createInventoryItem(input: CreateInventoryItemInput!): InventoryItem!
      @requireAuth
    updateInventoryItem(
      id: Int!
      input: UpdateInventoryItemInput!
    ): InventoryItem! @requireAuth
    deleteInventoryItem(id: Int!): InventoryItem! @requireAuth
  }
`
