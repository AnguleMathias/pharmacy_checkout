import type { InventoryItem } from '@prisma/client'

import {
  inventoryItems,
  inventoryItem,
  createInventoryItem,
  updateInventoryItem,
  deleteInventoryItem,
} from './inventoryItems'
import type { StandardScenario } from './inventoryItems.scenarios'

describe('inventoryItems', () => {
  scenario('returns all inventoryItems', async (scenario: StandardScenario) => {
    const result = await inventoryItems()

    expect(result.length).toEqual(Object.keys(scenario.inventoryItem).length)
  })

  scenario(
    'returns a single inventoryItem',
    async (scenario: StandardScenario) => {
      const result = await inventoryItem({ id: scenario.inventoryItem.one.id })

      expect(result).toEqual(scenario.inventoryItem.one)
    }
  )

  scenario('creates a inventoryItem', async (scenario: StandardScenario) => {
    const result = await createInventoryItem({
      input: {
        name: 'String',
        quantity: 261760,
        updatedAt: '2023-05-15T09:05:15.587Z',
        pharmacistProfileId: scenario.inventoryItem.two.pharmacistProfileId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.quantity).toEqual(261760)
    expect(result.updatedAt).toEqual(new Date('2023-05-15T09:05:15.587Z'))
    expect(result.pharmacistProfileId).toEqual(
      scenario.inventoryItem.two.pharmacistProfileId
    )
  })

  scenario('updates a inventoryItem', async (scenario: StandardScenario) => {
    const original = (await inventoryItem({
      id: scenario.inventoryItem.one.id,
    })) as InventoryItem
    const result = await updateInventoryItem({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a inventoryItem', async (scenario: StandardScenario) => {
    const original = (await deleteInventoryItem({
      id: scenario.inventoryItem.one.id,
    })) as InventoryItem
    const result = await inventoryItem({ id: original.id })

    expect(result).toEqual(null)
  })
})
