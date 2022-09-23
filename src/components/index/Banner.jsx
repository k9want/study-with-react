import React from 'react'
import bannerImag from '../../assets/images/Banner.jpg'

function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-left  col-md-4">
            <h2>
              SWIT에서 <br />
              여러분과 함께할 <br />
              팀원을 찾아보세요
            </h2>
            <p className="sm-hidden">SWIT은 Study With의 약자입니다.</p>
          </div>

          <div className="banner-right col-md-8">
            <div className="banner-img">
              <img src={bannerImag} alt="배너이미지" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
