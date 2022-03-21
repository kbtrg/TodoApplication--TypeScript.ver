import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { TodoItemsProvider } from '../component/provider/TodoItemsProvider'
import Home from '../page/Home'
import TodoApp from '../page/TodoApp'
import Anger from '../page/Anger'
import Stress from '../page/Stress'
import Success from '../page/Success'
import Page404 from '../page/Page404'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="todo"
        element={
          <TodoItemsProvider>
            <TodoApp />
          </TodoItemsProvider>
        }
      />
      <Route path="anger" element={<Anger />} />
      <Route path="stress">
        <Route path="" element={<Stress />} />
        {/* 下位ページの記載 */}
      </Route>
      <Route path="success" element={<Success />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}
