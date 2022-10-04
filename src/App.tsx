import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

export const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>hello guys</h1>
    </ThemeProvider>
  )
}
