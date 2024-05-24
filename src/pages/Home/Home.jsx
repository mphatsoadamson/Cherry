import React from 'react';
import './Home.css';
import Slideshow from './imageslider';

function Home() {
  return (
    <div className='home-page'>
        {/*Welcome text*/}
        <div className='welcome'>
            {/* <p><strong><span>Welcome To Cherry</span>,Your Premier e-commerce solution</strong></p> */}
        </div>
        {/*BestOfferSection*/}  
      <section className='Best-Offer'>
      <div className='text-center p-5'>
                    <h1>Best Offer Best Product</h1>
                </div>
        <div className='offer-section'>
            <div className='category'>
                <h2>Men's pants</h2>
                <img src='https://th.bing.com/th/id/OIP.olhyg-TXZIsQfRmviC2LJAHaHa?w=500&h=500&rs=1&pid=ImgDetMain' alt='Mens pants'/>
                <button>See List</button>
            </div>
            <div className='category'>
                <h2>Computer accessory</h2>
                <img src='https://5.imimg.com/data5/GX/KX/QG/SELLER-81664477/apple-macbook-air-500x500.png' alt='Comupter Acessory'/>
                <button>See List</button>
            </div>   
        </div>
          
      </section>

        {/*Image slider*/}
        <section className='slider'>
          <div className='slider'>
            <Slideshow/>
         </div>
         </section>

        {/* Find Food Section */}
        <section>
        <div className='food-order-container'>
            <h1>Find Food And Order</h1>
            <div className='food-images'>
                <img src='https://thumbs.dreamstime.com/b/hot-dog-white-background-big-sandwich-sausage-various-vegetables-59676930.jpg' alt='Hot Dog'/>
                <img src='https://th.bing.com/th/id/OIP.Yz16Fdwto_37wAp0W9cU2wHaHa?rs=1&pid=ImgDetMain' alt='Salad'/>
                <img src='https://th.bing.com/th/id/OIP.TwKJ31JJMelCMg_4f4-GXwHaHa?rs=1&pid=ImgDetMain' alt='drink '/>
                <img src='https://th.bing.com/th/id/OIP.gdS6xUIFg3Fghl63PeKQPQHaHa?rs=1&pid=ImgDetMain' alt='milkpack Dog'/>
            </div>
            <button className='order-button'>Order Now</button>
        </div>
        </section>

        {/*Final Section*/}
        <section className='Final-Section'>
            <div className='category-container'>
            <div className='cate-one'>
                <div className='category-item'>
                    <h2>Get a gift For Someone</h2>
                    <img src='https://www.chattersource.com/wp-content/uploads/2021/04/6082ce2cdff19d6767c75a71_HpmR3x-mofuShRixFnIHG-D6PtBG3GiU3RY6Hk16C_btk-Aw6jsXBwNgfQMJuoXW25hFqJ03wbDVbILyJzJ3WzKwG64GOBTGxeklY9r-QHZ4ecHKigaTqJlPI_walECS9Td6ykI-768x512.jpg' alt='Get Gift For Someone'/>
                    <button>See List</button>
                </div>
                <div className='category-item'>
                <h2>Buy the best laptops</h2>
                    <img src='https://www.coindesk.com/resizer/AVwi1pDQz3CooIXiazm4wb2a_vQ=/567x435/filters:quality(80):format(jpg)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/5D3O3PTGRBDMXMHR3K5QF45HF4.jpg' alt='Best laptop'/>
                    <button>See List</button>
                </div>
            </div>

            <div className='cate-two'>
            <div className='category-item'>
                <h2>Best designers</h2>
                    <img src='https://cdn-images-1.medium.com/max/800/1*SylxZzQhcfCi7sq2wJcAEQ.png' alt='Best designer'/>
                    <button>See List</button>
                </div>
                <div className='category-item'>
                <h2>Buy the shoes</h2>
                    <img src='https://th.bing.com/th/id/OIP.B3PLxb6jS5auzx0ihitVEwHaE9?w=550&h=368&rs=1&pid=ImgDetMain' alt='Buy the shoes'/>
                    <button>See List</button>
                </div>
            </div>

            <div className='cate-three'>
            <h2>Talk About beauty and let your beauty talk</h2>
                <div className='category-item'>
                    {/* <img src='https://th.bing.com/th/id/OIP.szbYWllFe1KdyKAFU_N6WAHaEP?rs=1&pid=ImgDetMain' alt='beauty'/> */}
                    <button>See List</button>
                </div>
            </div>

            <div className='cate-four'>
            <div className='category-item'>
            <h2>Find your fit Ladies wear</h2>
                    <img src='https://cdn.shopify.com/s/files/1/0513/7069/products/Tikiboo_Leggings_SeamlessPurple_Model_Front_500x.jpg?v=1645520886' alt='ladies fit'/>
                    <button>See List</button>
                </div>
                <div className='category-item'>
            <h2>Find your fit Ladies shoes</h2>
                    <img src='https://th.bing.com/th/id/OIP.Ha0vgh69soxlHCqU3iqdjgAAAA?rs=1&pid=ImgDetMain' alt='ladies fit shoes'/>
                    <button>See List</button>
                </div>
            </div>

            <div className='cate-five'>
                <div className='category-item'>
                <h2>Get your jewelries</h2>
                    {/* <img src='https://cdn.shopify.com/s/files/1/1768/9665/products/mekj434-131_alt1_1024x1024.jpg?v=1497487994' alt='jewerlies'/> */}
                    <button>See List</button>
                </div>
            </div>
         </div>

        </section>
    </div>
        

        

    
  );
}
export default Home;


       
    