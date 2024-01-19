 import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Router>
        Header
        <Routes>
          <Route>

          </Route>
        </Routes>
        Footer
       </Router>
    </>
  )
}

export default App
