import type { User } from '@prisma/client'

import { users, user, createUser, updateUser, deleteUser } from './users'
import type { StandardScenario } from './users.scenarios'


describe('users', () => {
  scenario('returns all users', async (scenario: StandardScenario) => {
    const result = await users()

    expect(result.length).toEqual(Object.keys(scenario.user).length)
  })

  scenario('returns a single user', async (scenario: StandardScenario) => {
    const result = await user({ id: scenario.user.one.id })

    expect(result).toEqual(scenario.user.one)
  })

  scenario('creates a user', async () => {
    const result = await createUser({
      input: {
        email: 'String6933257',
        password: 'String',
        updatedAt: '2023-05-15T08:41:42.808Z',
      },
    })

    expect(result.email).toEqual('String6933257')
    expect(result.password).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-05-15T08:41:42.808Z'))
  })

  scenario('updates a user', async (scenario: StandardScenario) => {
    const original = (await user({ id: scenario.user.one.id })) as User
    const result = await updateUser({
      id: original.id,
      input: { email: 'String59559142' },
    })

    expect(result.email).toEqual('String59559142')
  })

  scenario('deletes a user', async (scenario: StandardScenario) => {
    const original = (await deleteUser({ id: scenario.user.one.id })) as User
    const result = await user({ id: original.id })

    expect(result).toEqual(null)
  })
})
