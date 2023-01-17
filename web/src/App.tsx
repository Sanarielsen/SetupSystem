import { Habit } from './components/Habit'
import './styles/global.css'

function App() {
  return (
    <>
      <Habit completed={20} />
      <Habit completed={10} />
      <Habit completed={40} />
      <Habit completed={50} />
    </>
  )
}

export default App
