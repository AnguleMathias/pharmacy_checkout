import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BillForm from 'src/components/Bill/BillForm'

import type { CreateBillInput } from 'types/graphql'

const CREATE_BILL_MUTATION = gql`
  mutation CreateBillMutation($input: CreateBillInput!) {
    createBill(input: $input) {
      id
    }
  }
`

const NewBill = () => {
  const [createBill, { loading, error }] = useMutation(CREATE_BILL_MUTATION, {
    onCompleted: () => {
      toast.success('Bill created')
      navigate(routes.bills())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: CreateBillInput) => {
    createBill({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Bill</h2>
      </header>
      <div className="rw-segment-main">
        <BillForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewBill
