import Title from "./components/Title"
import About from "./components/About"
import Recommendations from "./components/recommendations"
import Portfolio from "./components/Portfolio"
import Bottom from "./components/Bottom"
function App(){
  return <div style={{position:'relative'}}>
   <Title />
   <About />
   <Portfolio />
   <Recommendations />
   <Bottom />
  </div>
}

export default App