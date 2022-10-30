import './Oraculo.css';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButtons, IonMenuButton, IonCardContent } from '@ionic/react';
import {IonGrid, IonRow, IonCol, IonImg, IonItem, IonLabel} from '@ionic/react';

const Oraculo: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className='ion-padding'>
            
            <IonGrid fixed={true}>
              
              <IonRow >
                 <IonCol size='12'>
                      <h4>Hola ✌, soy Edwin</h4>
                 </IonCol>
              </IonRow>

              <IonRow>
                 <IonCol size='12' className="ion-align-self-center">
                    <IonImg src="./assets/img/edwinroman.png"/>
                    <IonItem>
                      <IonLabel><a href='http://www.linkedin.com/in/edwinroman30'>Edwin Roman - Linkedin</a></IonLabel>
                      <small>edcode03@gmail.com</small>
                    </IonItem>
                 </IonCol>
              </IonRow>

              <IonRow>
                  <IonCardContent>A Software Engineer focus on the Backend field of information systems.</IonCardContent>
                  <small>Mi nombre es Edwin Roman, soy un desarrollador de software que sueña y tiene como meta ayudar a millones de personas mediante la tecnología. 2020-10233</small>
              </IonRow>

            </IonGrid>

      </IonContent>

    </IonPage>
  );
};

export default Oraculo;