import './App.css'

import Header from './components/Header'
import Chat from './components/Chat'
import Sendbox from './components/Sendbox'
import { Box } from '@chakra-ui/react'

const App: React.FC = () => {

  return (
    
    <Box >
      <Header />
      <Chat />
      <Sendbox />
    </Box>
  )
}

export default App
