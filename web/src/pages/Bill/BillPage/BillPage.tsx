import BillCell from 'src/components/Bill/BillCell'

type BillPageProps = {
  id: number
}

const BillPage = ({ id }: BillPageProps) => {
  return <BillCell id={id} />
}

export default BillPage
