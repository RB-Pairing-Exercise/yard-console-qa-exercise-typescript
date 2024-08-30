import { render, screen } from '@testing-library/react'
import NestedLayout from './NestedLayout'

describe('NestedLayout', () => { 
  it("renders correctly with the title showing", () => { 
    render(<NestedLayout title="test" />)

    expect(screen.getByText("test")).toBeInTheDocument()
   })
 })