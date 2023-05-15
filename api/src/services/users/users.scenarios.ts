import type { Prisma, User } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String1178136',
        password: 'String',
        updatedAt: '2023-05-15T08:41:42.814Z',
      },
    },
    two: {
      data: {
        email: 'String3918194',
        password: 'String',
        updatedAt: '2023-05-15T08:41:42.814Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
