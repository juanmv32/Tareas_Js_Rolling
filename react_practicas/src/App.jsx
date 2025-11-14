import "./App.css";
import { useState } from "react";
import BtnStandard from "./assets/components/BtnStandard";
import ListProfileCard from "./assets/components/ListProfileCard";

function App() {
const [show, setshow] = useState(false);
const showComponent=()=>{
  setshow(!show)
}

  return (
    <div>
      <h1>Bienvenido a mi React</h1>
      <div>
        <BtnStandard title={show ? "Mostrar 🔽 Perfiles":"Ocultar 🔼 Perfiles"} action={showComponent} />
        
      </div>
      {show && <ListProfileCard/>}
    </div>
  );
}

export default App;
