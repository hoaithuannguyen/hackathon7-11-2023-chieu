import React from 'react'

export default function Body({ data, setData }) {

    const handleQuantity = (id, status) => {
        const newProducts = [...data]
        const index = newProducts.findIndex(product => product.id == id)
        switch (status) {
            case 0:
                if (newProducts[index].count > 0) {
                    newProducts[index].count -= 1
                }
                break
            case 1:
                newProducts[index].count += 1
                break
        }
        setData(newProducts)
    }

    return (
        <div style={{ display: "Grid", gridTemplateColumns: "auto auto auto", marginLeft: "150px" }} >

            {data.map((item, index) => {
                return <div key={index} >
                    <img src={item.img} alt="" width={200} height={120} />
                    <p>{item.name}</p>
                    <p>{item.price}$</p>

                    <button onClick={() => handleQuantity(item.id, 0)}>Giảm</button>
                    <span>{item.count}</span>
                    <button onClick={() => handleQuantity(item.id, 1)}>Tăng</button>

                </div>
            })}

        </div>
    )
}
