import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import InventoryItemForm from 'src/components/InventoryItem/InventoryItemForm'

import type { CreateInventoryItemInput } from 'types/graphql'

const CREATE_INVENTORY_ITEM_MUTATION = gql`
  mutation CreateInventoryItemMutation($input: CreateInventoryItemInput!) {
    createInventoryItem(input: $input) {
      id
    }
  }
`

const NewInventoryItem = () => {
  const [createInventoryItem, { loading, error }] = useMutation(
    CREATE_INVENTORY_ITEM_MUTATION,
    {
      onCompleted: () => {
        toast.success('InventoryItem created')
        navigate(routes.inventoryItems())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateInventoryItemInput) => {
    createInventoryItem({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New InventoryItem</h2>
      </header>
      <div className="rw-segment-main">
        <InventoryItemForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewInventoryItem
