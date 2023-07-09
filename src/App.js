import Nav from "./componets/navbar";
import Imgcont from "./componets/imagecont";
import Caro from "./componets/caro";
import Lastcont from "./componets/lastcont";
import './App.css';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Imgcont/>
      <Caro/>
      <Lastcont/>
      {/* <h1>hello</h1> */}
    </div>
  );
}

export default App;
