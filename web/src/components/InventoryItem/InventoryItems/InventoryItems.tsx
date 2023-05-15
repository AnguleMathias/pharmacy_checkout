import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/InventoryItem/InventoryItemsCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteInventoryItemMutationVariables,
  FindInventoryItems,
} from 'types/graphql'

const DELETE_INVENTORY_ITEM_MUTATION = gql`
  mutation DeleteInventoryItemMutation($id: Int!) {
    deleteInventoryItem(id: $id) {
      id
    }
  }
`

const InventoryItemsList = ({ inventoryItems }: FindInventoryItems) => {
  const [deleteInventoryItem] = useMutation(DELETE_INVENTORY_ITEM_MUTATION, {
    onCompleted: () => {
      toast.success('InventoryItem deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteInventoryItemMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete inventoryItem ' + id + '?')) {
      deleteInventoryItem({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Pharmacist profile id</th>
            <th>Bill id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {inventoryItems.map((inventoryItem) => (
            <tr key={inventoryItem.id}>
              <td>{truncate(inventoryItem.id)}</td>
              <td>{truncate(inventoryItem.name)}</td>
              <td>{truncate(inventoryItem.description)}</td>
              <td>{truncate(inventoryItem.quantity)}</td>
              <td>{timeTag(inventoryItem.createdAt)}</td>
              <td>{timeTag(inventoryItem.updatedAt)}</td>
              <td>{truncate(inventoryItem.pharmacistProfileId)}</td>
              <td>{truncate(inventoryItem.billId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.inventoryItem({ id: inventoryItem.id })}
                    title={'Show inventoryItem ' + inventoryItem.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editInventoryItem({ id: inventoryItem.id })}
                    title={'Edit inventoryItem ' + inventoryItem.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete inventoryItem ' + inventoryItem.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(inventoryItem.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default InventoryItemsList
