import { useCallback, useState,useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()_+~";
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  }, [length, number, charAllow, setPassword]);
  useEffect(() => 
    {
      passwordGenerator();
      }, [length,number,charAllow,passwordGenerator]);

//  use refrence hook 

const passwordRef = useRef(null);

const copyPassToClipBoard = useCallback(()=>{
  passwordRef.current?.select()
window.navigator.clipboard.writeText(password)
},[password])

  return (
    <>
 
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
      <h1 class=" text-center text-white my-3">
          Password Generator
        </h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="password" readOnly
        ref={passwordRef}
      />
      <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
      onClick={copyPassToClipBoard}>copy</button>
    </div>
    <div className="flex text-sm gap-x-2">
      <input type="range" min={6} max={20} value={length} className="cursor-pointer" 
        onChange={(e)=>{
          setLength(e.target.value)
        }}
      />
      <label htmlFor="">length : {length}</label>
      
    </div>
    <div className="flex item-center gap-x-1">
    <input type="checkbox" 
      defaultChecked ={number}
      id="numberInput"
      onChange={()=>{
        setNumber((prev)=>!prev);
        }}
      />
      <label htmlFor="numberInput">Number</label>
    </div>
    <div className="flex item-center gap-x-1">
    <input type="checkbox" 
      defaultChecked ={charAllow}
      id="charInput"
      onChange={()=>{
        setCharAllow((prev)=>!prev);
        }}
      />
      <label htmlFor="charInput">Characters</label>
    </div>

      </div>
    </>
  );
}

export default App;
