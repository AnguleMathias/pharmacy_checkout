import InventoryItemCell from 'src/components/InventoryItem/InventoryItemCell'

type InventoryItemPageProps = {
  id: number
}

const InventoryItemPage = ({ id }: InventoryItemPageProps) => {
  return <InventoryItemCell id={id} />
}

export default InventoryItemPage
