import {render, screen} from '@testing-library/react'
import renderer from 'react-test-renderer'
import App from './App'
import Story from './components/Story'
import StoriesList from './components/StoriesList'

// test suite
describe('truthy and falsy', () => {
  // test case
  test('true to be true', () => {
    // test assertion
    expect(true).toBe(true)
  })

  // test case
  test('false to be false', () => {
    // test assertion
    expect(false).toBe(false)
  })

  // test ~ it, alias
  test('renders right title', () => {
    render(<App />)
    const linkElement = screen.getByText(/My Hacker Stories/i)
    expect(linkElement).toBeInTheDocument()
  })
})

describe('Story', () => {
  const story = {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  }
  const handleRemoveItem = jest.fn()
  let component
  beforeEach(() => {
    component = renderer.create(<Story item={story} removeHandler={handleRemoveItem} />)
  })

  it('render all properties', () => {
    expect(component.root.findByType('a').props.href).toEqual(story.url)
    expect(component.root.findAllByType('td')[1].props.children).toEqual('Jordan Walke')
    // OR to not care order
    expect(component.root.findAllByProps({ children: 'Jordan Walke' }).length).toEqual(1)
  })

  it('calls onRemoveItem on button click', () => {
    component.root.findByType('button').props.onClick()

    expect(handleRemoveItem).toHaveBeenCalledTimes(1)
    expect(handleRemoveItem).toHaveBeenCalledWith(story.objectID)

    expect(component.root.findAllByType(Story).length).toEqual(1)
  });
})

describe('StoriesList', () => {
  const list = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ]

  it('renders two items', () => {
    const component = renderer.create(<StoriesList list={list} />)

    expect(component.root.findAllByType(Story).length).toEqual(2)
  })
})
