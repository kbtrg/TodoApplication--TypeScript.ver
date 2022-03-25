import React from 'react'
import { UserType } from '../../type'

export const TodoItemsContext = React.createContext<UserType[] | undefined>([])

export function TodoItemsProvider(props: { children: React.ReactNode }) {
  const { children } = props
  const [items, setItems] = React.useState<UserType[] | undefined>([])
  return <TodoItemsContext.Provider value={[items, setItems]}>{children}</TodoItemsContext.Provider>
}
