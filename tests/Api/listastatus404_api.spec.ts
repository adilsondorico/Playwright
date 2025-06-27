import { test, expect } from '@playwright/test'


test.describe.parallel('API Teste', () => {
  const baseURL = 'https://dog.ceo/api'

test('Dog.ceo - API Test - Lista Status 404', async ({ request }) => {
  const response = await request.get(`${baseURL}/breed/{breed}/images`)
  expect(response.status()).toBe(200)
  })
})


