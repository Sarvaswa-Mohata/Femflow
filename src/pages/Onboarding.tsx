import React from 'react';
import { IonContent, IonPage, IonicSlides, IonToolbar, IonImg, IonButton } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import './styles-Onboarding.css';

const Onboarding: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Swiper className='slide'>
          <SwiperSlide>
            <div className="slide-1">
              <a href="https://ibb.co/4mp9LSY"><IonImg src="https://i.ibb.co/kHXkTD9/header-img-slides.png" alt="header-img-slides"></IonImg></a>
              <a href="https://imgbb.com/"><IonImg src="https://i.ibb.co/LSCqJ2m/slide-1-char.png" alt="slide-1-char" className='img1'></IonImg></a>
              <p>Empower yourself with knowledge about your fertility and menstrual health.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-2">
              <a href="https://ibb.co/4mp9LSY"><IonImg src="https://i.ibb.co/kHXkTD9/header-img-slides.png" alt="header-img-slides"></IonImg></a>
              <a href="https://imgbb.com/"><IonImg src="https://i.ibb.co/PTQvSmm/slide-2-char.png" alt="slide-2-char" className='img2'></IonImg></a>
              <p>Stay informed about the progress of your pregnancy and monitor your baby's well-being.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-3">
              <a href="https://ibb.co/4mp9LSY"><IonImg src="https://i.ibb.co/kHXkTD9/header-img-slides.png" alt="header-img-slides"></IonImg></a>
              <a href="https://imgbb.com/"><IonImg src="https://i.ibb.co/1z5CGVS/slide-3-char.png" alt="slide-3-char" className='img3'></IonImg></a>
              <p className='p3'>Gain insights into your fertility and get a better understanding of your reproductive health.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-4">
              <a href="https://ibb.co/4mp9LSY"><IonImg src="https://i.ibb.co/kHXkTD9/header-img-slides.png" alt="header-img-slides"></IonImg></a>
              <a href="https://imgbb.com/"><IonImg src="https://i.ibb.co/XpWWnTZ/slide-4-char.png" alt="slide-4-char" ></IonImg></a>
              <p>Discover potential fertility issues and take proactive steps towards addressing them.</p>
              <IonButton className="rounded-button" color="custom-color">Get Started</IonButton>
            </div>
          </SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};
export default Onboarding;