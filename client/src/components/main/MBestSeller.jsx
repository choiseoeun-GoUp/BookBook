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

const MBestSeller = () => {
  return (
    <>
      <MSecondContainer>
        <div className="best-title">
          <h2>Best Seller</h2>
          <p>BOOKBOOK의 베스트셀러 상품을 살펴보세요</p>
        </div>

        <SwiperBox
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={66}
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
              spaceBetween: 70,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 66,
            },
          }}
        >
          <StyleSwipper>
            <MBestBox>
              <img src={BestImage} />
              <div className="best-cotents">
                <h3>목포 여행 레시피</h3>
                <p>양다솔</p>
              </div>
            </MBestBox>
          </StyleSwipper>
          <StyleSwipper>
            <MBestBox>
              <img src={BestImage} />
              <div className="best-cotents">
                <h3>목포 여행 레시피</h3>
                <p>양다솔</p>
              </div>
            </MBestBox>
          </StyleSwipper>
          <StyleSwipper>
            <MBestBox>
              <img src={BestImage} />
              <div className="best-cotents">
                <h3>목포 여행 레시피</h3>
                <p>양다솔</p>
              </div>
            </MBestBox>
          </StyleSwipper>
          <StyleSwipper>
            <MBestBox>
              <img src={BestImage} />
              <div className="best-cotents">
                <h3>목포 여행 레시피</h3>
                <p>양다솔</p>
              </div>
            </MBestBox>
          </StyleSwipper>
          <StyleSwipper>
            <MBestBox>
              <img src={BestImage} />
              <div className="best-cotents">
                <h3>목포 여행 레시피</h3>
                <p>양다솔</p>
              </div>
            </MBestBox>
          </StyleSwipper>
          <PointBox></PointBox>
        </SwiperBox>
      </MSecondContainer>
    </>
  );
};

export default MBestSeller;

const MSecondContainer = styled.section`
  margin-bottom: 100px;
  .best-title {
    text-align: center;
    margin-bottom: 50px;
    h2 {
      font-size: ${({ theme }) => theme.fontSizes.titleBase};
      font-family: "GodoM", "Arial", sans-serif;
    }
    p {
      font-size: ${({ theme }) => theme.fontSizes.xl};
      color: ${({ theme }) => theme.colors.Gray_050};
    }
  }
  .main-best {
    width: 360px;
    height: 550px;
    background-color: ${({ theme }) => theme.colors.Gray_010};
    position: absolute;
  }
`;

const SwiperBox = styled(Swiper)`
  width: 100%;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  position: relative;
`;
const PointBox = styled.div`
  width: 360px;
  height: 510px;
  background-color: ${({ theme }) => theme.colors.Gray_010};
  position: absolute;
  top: 10px;
  left: 39%;
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
