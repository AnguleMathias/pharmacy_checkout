import type { EditBillById, UpdateBillInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BillForm from 'src/components/Bill/BillForm'

export const QUERY = gql`
  query EditBillById($id: Int!) {
    bill: bill(id: $id) {
      id
      total
      createdAt
      updatedAt
      customerProfileId
    }
  }
`
const UPDATE_BILL_MUTATION = gql`
  mutation UpdateBillMutation($id: Int!, $input: UpdateBillInput!) {
    updateBill(id: $id, input: $input) {
      id
      total
      createdAt
      updatedAt
      customerProfileId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ bill }: CellSuccessProps<EditBillById>) => {
  const [updateBill, { loading, error }] = useMutation(UPDATE_BILL_MUTATION, {
    onCompleted: () => {
      toast.success('Bill updated')
      navigate(routes.bills())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: UpdateBillInput, id: EditBillById['bill']['id']) => {
    updateBill({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Bill {bill?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <BillForm bill={bill} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
