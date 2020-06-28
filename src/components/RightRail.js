import React from 'react'

const RightRail = () => {
    return (
        <aside>
            <section className="order-summary">
            <h2>Order Summary</h2>
            <div className="cart-item">
                <img src="" alt="" />
                <p><strong>Women's Graphic Tee (1)</strong></p>
                <p>$25.00</p>
            </div>
            <div className="cart-item">
                <img src="" alt="" />
                <p><strong>Women's Hooded Sweatshirt (1)</strong></p>
                <p>$45.00</p>
            </div>
            </section>
            <section className="gift-card">
                <p>Gift card/Discount Code</p>
                <div>
                    <input /><button>Apply</button>
                </div>
            </section>
            <section className="order-totals">
                <div>
                    <p>Subtotal</p>
                    <p>Tax</p>
                    <p>Shipping</p>
                    <p><strong>Total</strong></p>
                </div>
                <div>
                    <p>$70.00</p>
                    <p>$8.53</p>
                    <p>$0.00</p>
                    <p><strong>$78.53</strong></p>
                </div>
            </section>
        </aside>
    )
}

export default RightRail

