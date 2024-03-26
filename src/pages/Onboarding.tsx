import React from 'react';
import { IonContent, IonPage, IonicSlides, IonToolbar, IonImg } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Onboarding: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Swiper style={{
            backgroundColor: '#A9E7DB',
            fontFamily: 'Rubik',
            fontSize: '31px',
            color: '#575353',
            textAlign: 'justify',
          }}>
          <SwiperSlide>
            <div className="slide-1">
              <a href="https://ibb.co/4mp9LSY"><IonImg src="https://i.ibb.co/kHXkTD9/header-img-slides.png" alt="header-img-slides"></IonImg></a>
              <a href="https://imgbb.com/"><IonImg src="https://i.ibb.co/LSCqJ2m/slide-1-char.png" alt="slide-1-char"></IonImg></a>
              <p>Empower yourself with knowledge about your fertility and menstrual health.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-2">
              <a href="https://ibb.co/4mp9LSY"><IonImg src="https://i.ibb.co/kHXkTD9/header-img-slides.png" alt="header-img-slides"></IonImg></a>
              <a href="https://imgbb.com/"><IonImg src="https://i.ibb.co/PTQvSmm/slide-2-char.png" alt="slide-2-char"></IonImg></a>
              <p>Empower yourself with knowledge about your fertility and menstrual health.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-3">
              <a href="https://ibb.co/4mp9LSY"><IonImg src="https://i.ibb.co/kHXkTD9/header-img-slides.png" alt="header-img-slides"></IonImg></a>
              <a href="https://imgbb.com/"><IonImg src="https://i.ibb.co/1z5CGVS/slide-3-char.png" alt="slide-3-char"></IonImg></a>
              <p>Empower yourself with knowledge about your fertility and menstrual health.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-4">
              <a href="https://ibb.co/4mp9LSY"><IonImg src="https://i.ibb.co/kHXkTD9/header-img-slides.png" alt="header-img-slides"></IonImg></a>
              <a href="https://imgbb.com/"><IonImg src="https://i.ibb.co/XpWWnTZ/slide-4-char.png" alt="slide-4-char" ></IonImg></a>
              <p>Empower yourself with knowledge about your fertility and menstrual health.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};
export default Onboarding;