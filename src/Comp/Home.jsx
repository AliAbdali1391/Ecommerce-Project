import { Link } from 'react-router-dom'

export default function Home ({ onAddToCart }) {
  return (
    <>
      <br />
      <div id='shoes'>
        <img
          src='https://themewagon.github.io/stylish/images/card-image1.jpg'
          alt='shoe1'
          width={700}
          height={710}
          id='shoe1'
        />
        <div id='ts'>
          <img
            src='https://themewagon.github.io/stylish/images/card-image2.jpg'
            alt='shoe2'
            width={700}
            height={590}
            id='shoe2'
          />
          <img
            src='https://themewagon.github.io/stylish/images/card-image3.jpg'
            alt='shoe3'
            width={700}
            height={590}
            id='shoe3'
          />
        </div>
      </div>

      <div id='tdis'>
        <div id='tdd'>
          <div id='tid'>
            <span id='mtdt'>10% OFF Discount Coupons</span>
            <br />
            <span id='nmtdt'>
              Subscribe us to get 10% OFF on all the purchases
            </span>
          </div>
          <button id='eb'>EMAIL ME</button>
        </div>
      </div>

      <h2 className='tff'>
        F E A T U R E D&nbsp;&nbsp;&nbsp;P R O D U C T
        S&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='#' id='vaa'>
          VIEW ALL
        </Link>
      </h2>

      <div className='pl'>
        {[1, 2, 3, 4, 5].map(i => (
          <span key={i}>
            <img
              src={`https://themewagon.github.io/stylish/images/card-item${i}.jpg`}
              width={280}
              height={280}
              className='pipl'
            />
            <span className='tabfei'>
              <span className='pao'>
                Running shoes for men <b>$99</b>
              </span>
              &nbsp;&nbsp;
              <button
                className='atcb'
                onClick={() =>
                  onAddToCart({
                    name: `Running shoes for men ${i}`,
                    price: 99,
                    image: `https://themewagon.github.io/stylish/images/card-item${i}.jpg`,
                    cartid: crypto.randomUUID()
                  })
                }
              >
                Add To Cart
              </button>
            </span>
          </span>
        ))}
      </div>
    </>
  )
}
