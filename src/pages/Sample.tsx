import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import yogaImage from '../assets/yoga.jpg';
import './styles.css';

const Sample: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>Welcome to My Page!</h1>
        <img src={yogaImage} alt="Yoga" />
        <p>This is a simple Ionic React page with an image.</p>
      </IonContent>
    </IonPage>
  );
};

export default Sample;
