import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteInventoryItemMutationVariables,
  FindInventoryItemById,
} from 'types/graphql'

const DELETE_INVENTORY_ITEM_MUTATION = gql`
  mutation DeleteInventoryItemMutation($id: Int!) {
    deleteInventoryItem(id: $id) {
      id
    }
  }
`

interface Props {
  inventoryItem: NonNullable<FindInventoryItemById['inventoryItem']>
}

const InventoryItem = ({ inventoryItem }: Props) => {
  const [deleteInventoryItem] = useMutation(DELETE_INVENTORY_ITEM_MUTATION, {
    onCompleted: () => {
      toast.success('InventoryItem deleted')
      navigate(routes.inventoryItems())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteInventoryItemMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete inventoryItem ' + id + '?')) {
      deleteInventoryItem({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            InventoryItem {inventoryItem.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{inventoryItem.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{inventoryItem.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{inventoryItem.description}</td>
            </tr>
            <tr>
              <th>Quantity</th>
              <td>{inventoryItem.quantity}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(inventoryItem.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(inventoryItem.updatedAt)}</td>
            </tr>
            <tr>
              <th>Pharmacist profile id</th>
              <td>{inventoryItem.pharmacistProfileId}</td>
            </tr>
            <tr>
              <th>Bill id</th>
              <td>{inventoryItem.billId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editInventoryItem({ id: inventoryItem.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(inventoryItem.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default InventoryItem
