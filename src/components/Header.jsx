import React, { useState } from 'react'

export default function Header({ data }) {
    const [money, setMoney] = useState(1100000000)

    const totalPrice = data.reduce((total, item) => {
        return total + item.price * item.count
    }, 0)

    return (
        <div>
            <p>Đang có: <b>${(money - totalPrice).toLocaleString()} </b>
                <span>{totalPrice == 0 ? "để bạn mua hàng" : "bạn còn rất nhiều tiền"} </span>
            </p>
        </div>
    )
}
