//Linked Lists - Insert Nth Node
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

function insertNth(head, index, data) {
  const newNode = new Node(data)

  // Insert at the head
  if (index === 0) {
    newNode.next = head
    return newNode
  }

  let current = head
  let count = 0

  // Traverse to (n - 1)th node
  while (current !== null && count < index - 1) {
    current = current.next
    count++
  }

  // Insert the node
  newNode.next = current.next
  current.next = newNode

  return head
}