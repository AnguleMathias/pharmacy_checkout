import type { Prisma, InventoryItem } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InventoryItemCreateArgs>({
  inventoryItem: {
    one: {
      data: {
        name: 'String',
        quantity: 7411969,
        updatedAt: '2023-05-15T09:05:15.593Z',
        pharmacistProfile: {
          create: {
            user: {
              create: {
                email: 'String5556389',
                password: 'String',
                updatedAt: '2023-05-15T09:05:15.593Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        quantity: 650674,
        updatedAt: '2023-05-15T09:05:15.593Z',
        pharmacistProfile: {
          create: {
            user: {
              create: {
                email: 'String3638600',
                password: 'String',
                updatedAt: '2023-05-15T09:05:15.593Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<InventoryItem, 'inventoryItem'>
