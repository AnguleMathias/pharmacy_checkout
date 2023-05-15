import type {
  QueryResolvers,
  MutationResolvers,
  BillRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const bills: QueryResolvers['bills'] = () => {
  return db.bill.findMany()
}

export const bill: QueryResolvers['bill'] = ({ id }) => {
  return db.bill.findUnique({
    where: { id },
  })
}

export const createBill: MutationResolvers['createBill'] = ({ input }) => {
  return db.bill.create({
    data: input,
  })
}

export const updateBill: MutationResolvers['updateBill'] = ({ id, input }) => {
  return db.bill.update({
    data: input,
    where: { id },
  })
}

export const deleteBill: MutationResolvers['deleteBill'] = ({ id }) => {
  return db.bill.delete({
    where: { id },
  })
}

export const Bill: BillRelationResolvers = {
  inventoryItems: (_obj, { root }) => {
    return db.bill.findUnique({ where: { id: root?.id } }).inventoryItems()
  },
  customerProfile: (_obj, { root }) => {
    return db.bill.findUnique({ where: { id: root?.id } }).customerProfile()
  },
}
