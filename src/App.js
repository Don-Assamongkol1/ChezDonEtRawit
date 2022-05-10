import './App.css'
import { FoodDisplay } from './components/FoodDisplay.js'

function App() {
  return (
    <div className="food-grid">
      <FoodDisplay direction="right" />
      <FoodDisplay direction="left" />
      <FoodDisplay direction="right" />
      <FoodDisplay direction="left" />
    </div>
  )
}

export default App
