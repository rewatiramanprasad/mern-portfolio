import { render, screen } from '@testing-library/react'
import { describe, test } from 'vitest'
import Home from '../Home'

describe('Home unit test', () => {
  test('should return name', () => {
    render(<Home />)
    expect(screen.getByText(/I'm Raman/i)).toBeDefined()
  })
})
