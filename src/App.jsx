import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (

    <div className='w-full h-screen duration-300 flex align-middle p-3' style={{ backgroundColor: color }}>
      <ul className='bg-white w-40 p-4 rounded-2xl shadow-lg overflow-y-scroll'>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#FFF7D1] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#FFF7D1")}>#FFF7D1</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#8B5DFF] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#8B5DFF")}>#8B5DFF</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#00FF9C] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#00FF9C")}>#00FF9C</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#B6FFA1] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#B6FFA1")}>#B6FFA1</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#FFE700] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#FFE700")}>#FFE700</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#780000] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#780000")}>#780000</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#c1121f] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#c1121f")}>#c1121f</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#003049] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#003049")}>#003049</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#669bbc] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#669bbc")}>#669bbc</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#264653] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#264653")}>#264653</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#2a9d8f] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#2a9d8f")}>#2a9d8f</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#e9c46a] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#e9c46a")}>#e9c46a</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#f4a261] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#f4a261")}>#f4a261</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#e76f51] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#e76f51")}>#e76f51</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#fb8500] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#fb8500")}>#fb8500</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#ffb703] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#ffb703")}>#ffb703</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#219ebc] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#219ebc")}>#219ebc</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#3a5a40] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#3a5a40")}>#3a5a40</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#a3b18a] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#a3b18a")}>#a3b18a</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#03045e] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#03045e")}>#03045e</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#748cab] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#748cab")}>#748cab</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#e63946] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#e63946")}>#e63946</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#457b9d] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#457b9d")}>#457b9d</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#f2cc8f] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#f2cc8f")}>#f2cc8f</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#81b29a] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#81b29a")}>#81b29a</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#3d405b] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#3d405b")}>#3d405b</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#e07a5f] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#e07a5f")}>#e07a5f</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#6c584c] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#6c584c")}>#6c584c</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#003049] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#003049")}>#003049</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#d62828] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#d62828")}>#d62828</button>
        </li>
        <li className='mb-3'>
          <button className='text-[#ffffff] font-black shadow-lg bg-[#52b788] w-full p-2 rounded-full transition-all hover:shadow-none' onClick={() => setColor("#52b788")}>#52b788</button>
        </li>
      </ul>
    </div>
  )
}

export default App
