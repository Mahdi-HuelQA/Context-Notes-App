import React,{useContext} from 'react'
import { ThemeContext } from '../../App'

const ContextConfig = () => {
  const darkTheme = useContext(ThemeContext)
  const themeStyles = {
    backgroundColor: darkTheme ? '#333': '#ccc',
    color: darkTheme ? '#ccc': '#333',
  }

  return (
    <div style = {themeStyles}>ContextConfig</div>
  )
}

export default ContextConfig