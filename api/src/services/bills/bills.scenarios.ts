import type { Prisma, Bill } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BillCreateArgs>({
  bill: {
    one: {
      data: { total: 8917264.138635168, updatedAt: '2023-05-15T09:05:38.973Z' },
    },
    two: {
      data: { total: 6863174.249792887, updatedAt: '2023-05-15T09:05:38.973Z' },
    },
  },
})

export type StandardScenario = ScenarioData<Bill, 'bill'>
