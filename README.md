# Linked List Creation


## Table of Contents
1. Introduction
2. Breakdown 
3. Testing

# Introduction

This repository was created to demonstrated my understanding of linked lists and how to implement them.

I created two classes: *Node* and *LinkedList*
<br><br>

```javascript
// To create an instance of the LinkedList class

let list = new LinkedList()
```
---
# Breakdown

### Properties

* *size* - Returns the linked list's length.
* *head* - Returns the first node.
* *tail* - Returns the last node.

### Methods

* *append* - Adds a new Node to the end of the linked list.
* *prepend* - Adds a new Node to the end of the linked list.
* *at* - Returns the value at the given index.
* *pop* - Removes the last element and returns it's value.
* *contains* - Returns a boolean value based off if the list includes the given value.
* *find* - Returns the index for where the given value is stored.
* *toString* - Returns a string representation of the list.

Example :

```javascript
let list = new LinkedList()
list.append('b')
list.prepend('a')
list.append('c')

console.log(list.contains('b')) // logs: true

let str = list.toString()
console.log(str) // logs: ('a') -> ('b') -> ('c') -> null

console.log(list.head) // logs: a

```

\* *This project was an assigment for the Odin Project Full Stack JavaScript Online Bootcamp* 

To view the full assigment instructions, visit -  [https://www.theodinproject.com/lessons/javascript-linked-lists](https://www.theodinproject.com/lessons/javascript-linked-lists)

# Testing

To practice all steps of the development process, I decided to create unit tests to show everything is working. Instead of installing a testing library like Jest, I also wrote a few lines of code in the test-api.js file to create my own built in testing function.

Visit the test suite in test.js to see my unit tests or run the following in the terminal to get the test results:

```
npm test
```

\* *FYI, testing wasn't part of the assignment. Personal choice for good practice.*