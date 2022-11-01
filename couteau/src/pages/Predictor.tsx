import './Predictor.css';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButtons, IonMenuButton, IonCardContent, IonInput, IonButton } from '@ionic/react';
import {IonGrid, IonRow, IonCol, IonImg, IonItem, IonLabel} from '@ionic/react';
import {useState} from 'react';
import {CapacitorHttp, HttpResponse} from '@capacitor/core';

/* 
Aceptar el nombre de una persona y predecir su genero: (https://api.genderize.io/?name=irma) si es masculino mostraras algo azul,
de lo contrario algo rosa en la pantalla.
*/

const Predictor: React.FC = () => {

  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  async function determineteGenderAsync(pname : string = ""){
      try {
        
        const options = {
          url: 'https://api.genderize.io/',
          params: { name: pname }
        };
      
        const response: HttpResponse = await CapacitorHttp.get(options);      
        setGender(response.data.gender);

      } catch (error) {
        setGender("");
      }
  }


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
                      <h4>Predictor:</h4>
                 </IonCol>
              </IonRow>

              <IonRow>
                 <IonCol size='12' className="ion-align-self-center">
                    <IonItem>
                      <IonInput placeholder="Introduzca su nombre" onIonChange={e=> setName(String(e.detail.value))}></IonInput>
                    </IonItem>
                 </IonCol>
              </IonRow>

              <IonRow>
                <IonCol>
                  <IonButton onClick={()=> determineteGenderAsync(name)}>Determinar Género</IonButton>
                </IonCol>
              </IonRow>

            </IonGrid>

            <IonGrid>
              <IonRow>
                <IonCol>
                  <div className='circle-result' style={{background:('female' != gender)? 'blue' : 'pink' }}></div>
                </IonCol>
              </IonRow>
            </IonGrid>

      </IonContent>

    </IonPage>
  );
};

export default Predictor;