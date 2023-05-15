import type { Bill } from '@prisma/client'

import { bills, bill, createBill, updateBill, deleteBill } from './bills'
import type { StandardScenario } from './bills.scenarios'

describe('bills', () => {
  scenario('returns all bills', async (scenario: StandardScenario) => {
    const result = await bills()

    expect(result.length).toEqual(Object.keys(scenario.bill).length)
  })

  scenario('returns a single bill', async (scenario: StandardScenario) => {
    const result = await bill({ id: scenario.bill.one.id })

    expect(result).toEqual(scenario.bill.one)
  })

  scenario('creates a bill', async () => {
    const result = await createBill({
      input: {
        total: 3679751.5703327986,
        updatedAt: '2023-05-15T09:05:38.967Z',
      },
    })

    expect(result.total).toEqual(3679751.5703327986)
    expect(result.updatedAt).toEqual(new Date('2023-05-15T09:05:38.967Z'))
  })

  scenario('updates a bill', async (scenario: StandardScenario) => {
    const original = (await bill({ id: scenario.bill.one.id })) as Bill
    const result = await updateBill({
      id: original.id,
      input: { total: 2417034.807275247 },
    })

    expect(result.total).toEqual(2417034.807275247)
  })

  scenario('deletes a bill', async (scenario: StandardScenario) => {
    const original = (await deleteBill({ id: scenario.bill.one.id })) as Bill
    const result = await bill({ id: original.id })

    expect(result).toEqual(null)
  })
})
