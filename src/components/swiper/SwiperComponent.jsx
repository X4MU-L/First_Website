import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { ReactComponent as Responsive } from "../../assets/images/responsive.svg";
import { ReactComponent as AnimateImage } from "../../assets/images/Mobile inbox-pana.svg";
import { ReactComponent as SEOImage } from "../../assets/images/MobileSeo.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import styled from "styled-components";
const SwiperContainer = styled.div`
	width: 350px;
	svg {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
const Paragraph = styled.p`
	margin: 0;
	text-align: center;
	text-transform: uppeercase;
	font-size: 0.9rem;
`;
const SwiperComponent = () => {
	return (
		<SwiperContainer className="swiper-container">
			<Swiper
				modules={[Navigation, Autoplay]}
				slidesPerView={1}
				speed={1000}
				autoplay={{ disableOnInteraction: false, delay: 5000 }}
				navigation
				loop
			>
				<SwiperSlide>
					<AnimateImage />
					<Paragraph>Friendly Mobile UI</Paragraph>
				</SwiperSlide>
				<SwiperSlide>
					<SEOImage />
					<Paragraph>Search Engine Optimization</Paragraph>
				</SwiperSlide>
				<SwiperSlide>
					<Responsive />
					<Paragraph>Classic Responsive Designs</Paragraph>
				</SwiperSlide>
			</Swiper>
		</SwiperContainer>
	);
};
export default SwiperComponent;
