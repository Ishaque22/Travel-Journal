import Header from "./components/Header"
import { Card } from "./components/Card"
import Data from '../data'
import './App.css'

let data = Data.map((item)=>{
  return <Card key={item.title} item={item}/>
})

const App = () => {

  return (
    <div className="main">
      <Header />
      {data}
    </div>
  )
}

export default App
