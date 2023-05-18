import { useEffect, useState } from "react";

export default function Toggler() {
    const togglemode = (e) => {
        if(e.target.checked) {
            console.log("light");
        } else {
            console.log("dark");
        }
    },
    [check,setCheck] = useState(false)
    useEffect(() => {
        console.log("toggle");
        if ((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) || window.localStorage.mode == "dark") {
            document.documentElement.classList.add("dark")
            setCheck(false)
        } else {
            setCheck(true)
        }
    },[])
    return (
        <label className="relative inline-flex items-center mb-4 cursor-pointer" onChange={togglemode}>
            <input type="checkbox" value="" className="sr-only peer" defaultChecked={check} />
            <div
                className="toggle transition
             w-11
              h-6 
              bg-zinc-700 
              rounded-full 
              peer  
              peer-focus:ring-4 
              peer-focus:ring-zinc-300 
              dark:bg-zinc-300 
              peer-checked:after:translate-x-full 
              peer-checked:after:border-zinc-100 
              after:content-[''] 
              after:absolute 
              after:top-0.5 
              after:left-[2px] 
              after:bg-zinc-100 
              after:border-zinc-300 
              after:border 
              after:rounded-full 
              after:h-5 
              after:w-5 
              after:transition-all 
              dark:border-zinc-600 
              peer-checked:bg-zinc-400"
            ></div>
        </label>
    );
}
