import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type { DeleteBillMutationVariables, FindBillById } from 'types/graphql'

const DELETE_BILL_MUTATION = gql`
  mutation DeleteBillMutation($id: Int!) {
    deleteBill(id: $id) {
      id
    }
  }
`

interface Props {
  bill: NonNullable<FindBillById['bill']>
}

const Bill = ({ bill }: Props) => {
  const [deleteBill] = useMutation(DELETE_BILL_MUTATION, {
    onCompleted: () => {
      toast.success('Bill deleted')
      navigate(routes.bills())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteBillMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete bill ' + id + '?')) {
      deleteBill({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Bill {bill.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{bill.id}</td>
            </tr>
            <tr>
              <th>Total</th>
              <td>{bill.total}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(bill.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(bill.updatedAt)}</td>
            </tr>
            <tr>
              <th>Customer profile id</th>
              <td>{bill.customerProfileId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editBill({ id: bill.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(bill.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Bill
