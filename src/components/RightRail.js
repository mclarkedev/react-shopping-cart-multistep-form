import React from 'react';
import teeImg from '../img/tee.jpeg';
import hoodieImg from '../img/hoodie.jpeg';

const RightRail = () => {
    return (
        <aside>
            <section className="order-summary">
            <h2>Order Summary</h2>
            <div className="cart-item">
                <img width="50%" src={teeImg} alt="" className="product-img" />
                <div>
                    <p><strong>Women's Black Tee (1)</strong></p>
                    <p>$25.00</p>
                </div>
            </div>
            <div className="cart-item">
                <img width="50%" src={hoodieImg} alt="" className="product-img" />
                <div>
                    <p><strong>Women's Hooded Sweatshirt (1)</strong></p>
                    <p>$45.00</p>
                </div>
            </div>
            </section>
            <section>
                <p>Gift Card/Discount Code</p>
                <div className="gift-card">
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

export default RightRail;