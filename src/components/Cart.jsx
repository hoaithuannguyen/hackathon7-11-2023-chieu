import React from 'react'

function Cart({ data, setData }) {

    const totalPrice = data.reduce((total, item) => {
        return total + item.price * item.count
    }, 0)

    const data1 = data.filter(item => item.count != 0)

    const handleReset = () => {
        const newProducts = data.map((product) => {
            return {
                ...product,
                count: 0
            }
        })
        setData(newProducts)
    }

    return (
        <div>
            <div>
                <h3>Giỏ hàng của bạn:</h3>
                <div>
                    {data1.map((item) => (
                        <div>
                            <span>{item.name}:</span>
                            <span>{item.count}</span>
                        </div>
                    ))}
                </div>
                <div>
                    <div>
                        <b>Tổng tiền: ${totalPrice.toLocaleString()}</b>
                    </div>
                    <div>
                        <button onClick={handleReset}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart