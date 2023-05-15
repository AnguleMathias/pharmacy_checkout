import type {
  QueryResolvers,
  MutationResolvers,
  InventoryItemRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const inventoryItems: QueryResolvers['inventoryItems'] = () => {
  return db.inventoryItem.findMany()
}

export const inventoryItem: QueryResolvers['inventoryItem'] = ({ id }) => {
  return db.inventoryItem.findUnique({
    where: { id },
  })
}

export const createInventoryItem: MutationResolvers['createInventoryItem'] = ({
  input,
}) => {
  return db.inventoryItem.create({
    data: input,
  })
}

export const updateInventoryItem: MutationResolvers['updateInventoryItem'] = ({
  id,
  input,
}) => {
  return db.inventoryItem.update({
    data: input,
    where: { id },
  })
}

export const deleteInventoryItem: MutationResolvers['deleteInventoryItem'] = ({
  id,
}) => {
  return db.inventoryItem.delete({
    where: { id },
  })
}

export const InventoryItem: InventoryItemRelationResolvers = {
  pharmacistProfile: (_obj, { root }) => {
    return db.inventoryItem
      .findUnique({ where: { id: root?.id } })
      .pharmacistProfile()
  },
  bill: (_obj, { root }) => {
    return db.inventoryItem.findUnique({ where: { id: root?.id } }).bill()
  },
}
