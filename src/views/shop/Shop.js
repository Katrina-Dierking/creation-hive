import React from 'react'
import ShopNav from '../../components/navigations/shopNav/ShopNav'
import Footer from '../../components/footer/Footer'
import '../shop/shop.scss'

const Shop = () => {
  return (
    <section className='shop'>
    <ShopNav />
      <main>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et blanditiis distinctio voluptatum ex tenetur itaque reprehenderit possimus aspernatur magnam accusantium eos eveniet cum dolor corporis necessitatibus nisi, optio fugit tempora?</p>
      </main>
      <Footer />
    
    </section>
  
  )
}

export default Shop