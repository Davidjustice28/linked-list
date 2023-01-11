import LinkedList from './script.js'
import {it,expect} from './test-api.js'

// create a LinkedList test instance

let list = new LinkedList()
list.append('a')
list.append('b')


// 3 tests to verify the methods and properties are working

it('test to see if the size method is equal to 2', () => {
    expect(list.size).toBe(2)
})

it('test to see if the tail property is c',() => {
    list.append('c')
    list.append('d')
    expect(list.tail).toBe('d')
})

it('test to see if the pop method returns d', () => {
    expect(list.pop()).toBe('d')
})