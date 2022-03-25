import React from 'react'
import axios, { AxiosResponse, AxiosError } from 'axios'
import { TodoType, UserType } from '../../type'
import { TodoItemsContext } from '../provider/TodoItemsProvider'

// リストを一意に紐づけるキー
const getKey = () => Math.random().toString(32).substring(2)

const useTodoData = () => {
  const [, setItems] = React.useContext(TodoItemsContext)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  // axiosで取得
  const fetch = React.useCallback(async () => {
    setIsLoading(true)
    try {
      const res: AxiosResponse<TodoType[]> = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      )
      const filteredData = res.data.filter((data) => data.id < 20) // データ条件
      const loadedData = filteredData.map(
        (data): UserType => ({
          key: getKey(),
          text: data.title,
          done: data.completed,
        })
      )
      setItems(loadedData)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [])
  return { isLoading, fetch }
}

export default { useTodoData }
