import './home.css'
import Item from '../components/Item'
import { ShoppingCart } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Home() {

  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)

  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__row">

          <Item
            id={1}
            title="Iphone 14 | 64GB"
            price={1200}
            image="https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907_Full-Bleed-Image.jpg.large.jpg"
            rating={4}
          />

          <Item
            id={5}
            title="Iphone 12 | 64GB"
            price={700}
            image="https://m.media-amazon.com/images/I/71R1w6Y9kXS._AC_UF1000,1000_QL80_.jpg"
          />

          <Item
            id={3}
            title="Iphone 7 | 64GB"
            price={400}
            image="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-plus-01.jpg"
          />

          <Item
            id={4}
            title="Iphone 5 | 64GB"
            price={200}
            image="https://images.macrumors.com/t/nvGzcW0_MrzMhMGs0HK9x-k5Gb4=/1600x1200/smart/article-new/2016/02/iphonese-800x686.jpg"
          />

          <Item
            id={2}
            title="Iphone 6 | 64GB"
            price={300}
            image="https://mobileinto.com/images/Apple-iPhone-6.jpg"
          />
        </div>
      </div>
      <div className='shopping-cart' onClick={() => navigate('/cart')}>
        <ShoppingCart id='cartIcon' />
        <p>{getTotalQuantity() || 0}</p>
      </div>
    </div>
  )
}

export default Home