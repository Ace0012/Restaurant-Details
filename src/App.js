// import  Parent  from "./components/Parent";
import  Restaurant  from "./components/Restaurant";
import Data from './data.json'

function App() {
  return (
    <div className="App">
   <Restaurant {...Data}/>
    </div>
  );
}

export default App;
