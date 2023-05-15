import type { FindBillById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Bill from 'src/components/Bill/Bill'

export const QUERY = gql`
  query FindBillById($id: Int!) {
    bill: bill(id: $id) {
      id
      total
      createdAt
      updatedAt
      customerProfileId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Bill not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ bill }: CellSuccessProps<FindBillById>) => {
  return <Bill bill={bill} />
}
