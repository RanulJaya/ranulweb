import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Loading  from '../src/app/Loading/loadingpage'
 
describe('Home', () => {
  it('renders a button', () => {
    render(<Loading />)
 
    const button = screen.getByRole('button')
 
    expect(button).toBeInTheDocument()
  })
})