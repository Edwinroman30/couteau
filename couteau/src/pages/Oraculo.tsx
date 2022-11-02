import './Oraculo.css';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButtons, IonMenuButton, IonCardContent, IonInput, IonButton } from '@ionic/react';
import {IonGrid, IonRow, IonCol, IonImg, IonItem, IonLabel} from '@ionic/react';
import {useState} from 'react';
import {CapacitorHttp, HttpResponse} from '@capacitor/core';

/* 
Vista que acepte el nombre de una persona y determine la edad de la misma (https://api.agify.io/?name=meelad) dependiendo la edad de la 
persona debes mostrar un mensaje que diga si es joven, adulto o anciano. Muestra una imagen relativa a cada estado y su edad en numero.
*/

const Oraculo: React.FC = () => {

    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number>(0);
    const images = {
      child : './assets/img/child.png',
      adult : './assets/img/adult.png',
      older : './assets/img/older.png'
    }


    function imageURLReturner(){
        if(age < 18)
          return images.child;
        else if(age > 18 && age < 55)
          return images.adult;
        else 
          return images.older;
    }

    async function determinateAgeAsync(pname : string = ""){
        try {
          
          const options = {
            url: 'https://api.agify.io/',
            params: { name: pname }
          };
        
          const response: HttpResponse = await CapacitorHttp.get(options);      
          const {age} = response.data;
          setAge(Number.parseInt(age));
  
        } catch (error) {
          
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
                        <h4>Oraculo:</h4>
                   </IonCol>
                </IonRow>
  
                <IonRow>
                   <IonCol size='12' className="ion-align-self-center">
                      <IonItem>
                        <IonInput placeholder="Introduzca su nombre:" onIonChange={e=> setName(String(e.detail.value))}></IonInput>
                      </IonItem>
                   </IonCol>
                </IonRow>
  
                <IonRow>
                  <IonCol>
                    <IonButton onClick={()=> determinateAgeAsync(name)}>Determinar Edad</IonButton>
                  </IonCol>
                </IonRow>
  
              </IonGrid>
  
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonLabel className='text-center'>Edad: {age}</IonLabel>
                    <hr/>
                    {
                      age != 0 && 
                                  <div className='circle-result'>
                                      <img className='circle-result-img' src={imageURLReturner()} />
                                  </div>
                    }
                  </IonCol>
                </IonRow>
              </IonGrid>
  
        </IonContent>
  
      </IonPage>
  );
};

export default Oraculo;