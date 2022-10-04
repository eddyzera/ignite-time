import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>hello guys</h1>
    </ThemeProvider>
  )
}
