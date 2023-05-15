import type { FindInventoryItemById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import InventoryItem from 'src/components/InventoryItem/InventoryItem'

export const QUERY = gql`
  query FindInventoryItemById($id: Int!) {
    inventoryItem: inventoryItem(id: $id) {
      id
      name
      description
      quantity
      createdAt
      updatedAt
      pharmacistProfileId
      billId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>InventoryItem not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  inventoryItem,
}: CellSuccessProps<FindInventoryItemById>) => {
  return <InventoryItem inventoryItem={inventoryItem} />
}
