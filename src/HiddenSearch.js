import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./style.css";

const HiddenSearch = () => {
    const [showInput,setShowInput] = useState(false);
    const[bgc,setBgc] = useState("white");

    function handleClick(e){
        setBgc("#1a1a1a");
        if (e.target.className === "container"){
            setShowInput(false);
            setBgc("white");
        }
    }

  return (
    <>
    <section className="container" 
    style={{backgroundColor:bgc}}
    onClick={handleClick}>
        {showInput?(<input type="text" placeholder="Search..." />):(<FaSearch onClick={()=>setShowInput(true)} />)}
    </section>
    </>
  )
}

export default HiddenSearch