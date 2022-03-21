import React from 'react'

export const TodoItemsContext = React.createContext([])

export function TodoItemsProvider(props: { children: React.ReactNode }) {
  const { children } = props
  const [items, setItems] = React.useState([])
  return <TodoItemsContext.Provider value={[items, setItems]}>{children}</TodoItemsContext.Provider>
}
