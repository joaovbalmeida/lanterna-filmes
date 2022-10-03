import { createContext, useContext } from 'react'

export const ContentContext = createContext({ content: null, setContent: () => {} })

const useContent = () => {
  return useContext(ContentContext)
}

export default useContent
