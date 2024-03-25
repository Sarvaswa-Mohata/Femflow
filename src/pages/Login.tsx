 import { IonCard, IonCardContent, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
 import React from 'react';
 
 const Login: React.FC = () => {
    const doLogin = (event: any) => {
        event.preventDefault();
        console.log('doLogin');
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonTitle>Page Title</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardContent>Sarvaswa</IonCardContent>
                    <IonInput label="email"></IonInput>
                    <IonCardContent>Sarvaswa</IonCardContent>
                    <IonCardContent>Sarvaswa</IonCardContent>
                    <IonCardContent>Sarvaswa</IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
 };
 
 export default Login;