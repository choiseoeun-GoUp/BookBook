import React from "react";
import styled from "styled-components";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Recommend.css";
import BestImage from "../../assets/images/베스트셀러 책.png";
import FirstBook from "../../assets/images/금메달.png";

const MBestSeller = ({ position }) => {
  return (
    <>
      <MSecondContainer>
        <div
          className="best-title"
          style={{
            opacity: (position - 600) / 50,
          }}
        >
          <h2>Best Seller</h2>
          <p>BOOKBOOK의 베스트셀러 상품을 살펴보세요</p>
        </div>

        <SwiperBox
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={true}
          speed={1500}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1080: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          style={{
            opacity: (position - 850) / 100,
          }}
        >
          <StyleSwipper>
            <MBestBox>
              <img src={BestImage} alt="베스트셀러1 이미지" />
              <div className="best-cotents">
                <h3>목포 여행 레시피</h3>
                <p>양다솔</p>
              </div>
            </MBestBox>
          </StyleSwipper>
          <StyleSwipper>
            <MBestBox>
              <img src={BestImage} alt="베스트셀러2 이미지" />
              <div className="best-cotents">
                <h3>목포 여행 레시피</h3>
                <p>양다솔</p>
              </div>
            </MBestBox>
          </StyleSwipper>
          <StyleSwipper>
            <MBestBox>
              <img src={BestImage} alt="베스트셀러3 이미지" />
              <div className="best-cotents">
                <h3>목포 여행 레시피</h3>
                <p>양다솔</p>
              </div>
            </MBestBox>
          </StyleSwipper>
          <img src={FirstBook} alt="1등 상품 이미지" className="first-mark" />
          <PointBox></PointBox>
        </SwiperBox>
      </MSecondContainer>
    </>
  );
};

export default MBestSeller;

const MSecondContainer = styled.section`
  .best-title {
    text-align: center;
    margin-bottom: 50px;
    margin-top: 150px;
    h2 {
      font-size: ${({ theme }) => theme.fontSizes.titleBase};
      font-family: "GodoM", "Arial", sans-serif;
    }
    p {
      font-size: ${({ theme }) => theme.fontSizes.xl};
      color: ${({ theme }) => theme.colors.Gray_050};
    }
  }
`;

const SwiperBox = styled(Swiper)`
  max-width: 1280px;
  position: relative;
  padding: 50px 0;
  .first-mark {
    position: absolute;
    top: 10%;
    left: 40%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }
`;
const PointBox = styled.div`
  width: 360px;
  height: 510px;
  background-color: ${({ theme }) => theme.colors.Gray_010};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -54.5%);
  border-radius: 20px;
`;
const StyleSwipper = styled(SwiperSlide)`
  cursor: pointer;
  padding-bottom: 30px;
`;

const MBestBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    overflow: hidden;
    z-index: 1;
  }
  .best-cotents {
    text-align: center;
    padding: 20px 0;
    h3 {
      font-weight: bold;
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }
  }
`;
