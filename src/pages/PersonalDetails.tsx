import React from 'react';
import { IonContent, IonGrid, IonRow, IonCol, IonItem, IonAvatar, IonLabel, IonIcon, IonInput } from '@ionic/react';

const PersonalDetails: React.FC = () => {
  const selectGender = (gender: string) => {
    // Handle gender selection
  };

  return (
    <IonContent>
      <IonGrid>
        {/* Choose Your Image */}
        <IonRow>
          <IonCol>
            <IonItem>
              <IonAvatar>
                <img src="path/to/default/image" alt="Profile Image" />
              </IonAvatar>
              <IonLabel>
                Choose your image
              </IonLabel>
            </IonItem>
          </IonCol>
        </IonRow>

        {/* Username Field */}
        <IonRow>
          <IonCol>
            <IonItem>
              <IonIcon name="create" slot="start" />
              <IonInput placeholder="Username" type="text" />
            </IonItem>
          </IonCol>
        </IonRow>

        {/* City Field */}
        <IonRow>
          <IonCol>
            <IonItem>
              <IonIcon name="create" slot="start" />
              <IonInput placeholder="City" type="text" />
            </IonItem>
          </IonCol>
        </IonRow>

        {/* Gender Field */}
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel>
                Your Gender
              </IonLabel>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem onClick={() => selectGender('male')}>
              <IonAvatar>
                <img src="path/to/male/image" alt="Male" />
              </IonAvatar>
              <IonLabel>
                Male
              </IonLabel>
            </IonItem>
          </IonCol>
          <IonCol>
            <IonItem onClick={() => selectGender('female')}>
              <IonAvatar>
                <img src="path/to/female/image" alt="Female" />
              </IonAvatar>
              <IonLabel>
                Female
              </IonLabel>
            </IonItem>
          </IonCol>
        </IonRow>

        {/* Age Field */}
        <IonRow>
          <IonCol>
            <IonItem>
              <IonIcon name="create" slot="start" />
              <IonInput placeholder="Age" type="number" />
            </IonItem>
          </IonCol>
        </IonRow>

        {/* Contact Number Field */}
        <IonRow>
          <IonCol>
            <IonItem>
              <IonIcon name="create" slot="start" />
              <IonInput placeholder="Contact Number" type="tel" />
            </IonItem>
          </IonCol>
        </IonRow>

        {/* Address Field */}
        <IonRow>
          <IonCol>
            <IonItem>
              <IonIcon name="create" slot="start" />
              <IonInput placeholder="Address" type="text" />
            </IonItem>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default PersonalDetails;
