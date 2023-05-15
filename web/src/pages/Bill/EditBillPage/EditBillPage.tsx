import EditBillCell from 'src/components/Bill/EditBillCell'

type BillPageProps = {
  id: number
}

const EditBillPage = ({ id }: BillPageProps) => {
  return <EditBillCell id={id} />
}

export default EditBillPage
