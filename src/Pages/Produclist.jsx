export default function Produclist () {
  return (
    <>
      <div className='pl'>
        {[1, 2, 3, 4, 5].map(i => (
          <span>
            <img
              src={`https://themewagon.github.io/stylish/images/card-item${i}.jpg`}
              width={280}
              height={280}
              className='pipl'
            />
            <span className='pao'>
              Running shoes for men <b>$99</b>
            </span>
          </span>
        ))}
      </div>
      <div className='pl'>
        {[4, 1, 5, 3, 2].map(i => (
          <span>
            <img
              src={`https://themewagon.github.io/stylish/images/card-item${i}.jpg`}
              width={280}
              height={280}
              className='pipl'
            />
            <span className='pao'>
              Running shoes for men <b>$99</b>
            </span>
          </span>
        ))}
      </div>
      <div className='pl'>
        {[5, 3, 1, 2, 4].map(i => (
          <span>
            <img
              src={`https://themewagon.github.io/stylish/images/card-item${i}.jpg`}
              width={280}
              height={280}
              className='pipl'
            />
            <span className='pao'>
              Running shoes for men <b>$99</b>
            </span>
          </span>
        ))}
      </div>
    </>
  )
}
