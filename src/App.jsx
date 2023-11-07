import React, { useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Cart from './components/Cart';

export default function App() {
  const [data, setData] = useState([
    { name: "Bia", price: 100, img: "./img/bia.png", id: 1, count: 0 },
    { name: "Mì Tôm", price: 50, img: "./img/mitom.jpg", id: 2, count: 0 },
    { name: "Mực khô", price: 150, img: "./img/muckho.jpg", id: 3, count: 0 },
    { name: "Super Car", price: 1500000, img: "./img/oto.jpg", id: 4, count: 0 },
    { name: "Du Thuyền", price: 2500000, img: "./img/duthuyen.jpg", id: 5, count: 0 },
    { name: "Xe Tăng", price: 3500000, img: "./img/xetang.jpg", id: 6, count: 0 },

  ])
  // data.forEach(item => {
  //   item.price = item.price.toLocaleString();
  // });
  return (
    <div>
      <Header data={data}></Header>
      <Body data={data} setData={setData}></Body>
      <Cart data={data} setData={setData}></Cart>
    </div>
  )
}
