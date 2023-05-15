import EditInventoryItemCell from 'src/components/InventoryItem/EditInventoryItemCell'

type InventoryItemPageProps = {
  id: number
}

const EditInventoryItemPage = ({ id }: InventoryItemPageProps) => {
  return <EditInventoryItemCell id={id} />
}

export default EditInventoryItemPage
