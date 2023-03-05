import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get('https://booking-api-nu.vercel.app/').then((res)=>{
      console.log(res)
    })
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
