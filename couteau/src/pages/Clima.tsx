import './Clima.css';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButtons, IonMenuButton, IonButton } from '@ionic/react';
import {IonGrid, IonRow, IonCol} from '@ionic/react';
import {useState} from 'react'
import {HttpResponse , CapacitorHttp} from '@capacitor/core';
import { Geolocation, Position } from '@capacitor/geolocation';
import { WeatherResult } from '../interfaces/IopenWeatherResult';
import WeatherDisplay from '../components/WeatherDisplay';

const Clima: React.FC = () => {

  const [weatherCondition, setWeatherCondition] = useState<WeatherResult>();
  
  async function getInternalGeolocationAsyn(){
    const coordinates : Position = await Geolocation.getCurrentPosition();
    return coordinates.coords;
  }

  async function getWeatherFromAPI(){

    const { longitude, latitude } = await getInternalGeolocationAsyn();

    const options = {
        url : 'https://api.openweathermap.org/data/2.5/weather',
        params: {
          lat : latitude.toString(),
          lon : longitude.toString(),
          appid : '0mkasmmkdlamfiavinnspennpes', //Mock API KEY
          units : 'metric'
        }
    };

    const response : HttpResponse = await CapacitorHttp.get(options);
    setWeatherCondition(response.data);
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
              
              <IonRow className='custome-header'>
                 <IonCol size='9'>
                      <h4>Weather Section:</h4>
                 </IonCol>

                <IonCol size='3'>
                    <IonButton onClick={async ()=> await getWeatherFromAPI()} >🌤</IonButton>
                </IonCol>
              </IonRow>

              <WeatherDisplay weatherResult={weatherCondition} />

            </IonGrid>

      </IonContent>

    </IonPage>
  );
};

export default Clima;