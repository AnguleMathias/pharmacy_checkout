import type { FindInventoryItems } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import InventoryItems from 'src/components/InventoryItem/InventoryItems'

export const QUERY = gql`
  query FindInventoryItems {
    inventoryItems {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No inventoryItems yet. '}
      <Link to={routes.newInventoryItem()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  inventoryItems,
}: CellSuccessProps<FindInventoryItems>) => {
  return <InventoryItems inventoryItems={inventoryItems} />
}
