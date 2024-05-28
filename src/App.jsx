import Tarjetas from "./components/Tarjetas"
import { GlobalContextProvider } from "./context/GlobalContext"

function App() {

  return (
    <>
    <GlobalContextProvider>
    <Tarjetas></Tarjetas>
    </GlobalContextProvider>
      
    </>
  )
}

export default App
