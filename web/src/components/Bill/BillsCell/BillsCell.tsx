import type { FindBills } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Bills from 'src/components/Bill/Bills'

export const QUERY = gql`
  query FindBills {
    bills {
      id
      total
      createdAt
      updatedAt
      customerProfileId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No bills yet. '}
      <Link to={routes.newBill()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ bills }: CellSuccessProps<FindBills>) => {
  return <Bills bills={bills} />
}
