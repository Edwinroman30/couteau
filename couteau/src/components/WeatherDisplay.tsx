import { WeatherResult } from '../interfaces/IopenWeatherResult';
import React from 'react'
import {IonGrid, IonRow, IonCol, IonImg, IonItem, IonLabel} from '@ionic/react';

interface WeatherContainer{
    weatherResult? : WeatherResult;
}

const WeatherDisplay : React.FC<WeatherContainer> = ({weatherResult}) => {
    
    if(weatherResult === undefined || weatherResult == null)
        return null;

    return (
    <IonGrid>
        
        <IonRow>
            <IonCol size='12' className="ion-align-self-center">
                <IonImg src={`http://openweathermap.org/img/wn/${weatherResult?.weather[0].icon}.png`} />
                <IonItem detail={false}>
                <IonLabel>
                    <h3>{weatherResult?.weather[0].main}</h3>
                    <p>{weatherResult?.weather[0].description}</p>
                    <br></br>
                    <h3>Temperature:</h3>
                    <p>Temperature: {weatherResult?.main.temp}°</p>
                    <p>Humidity: {weatherResult?.main.humidity}</p>
                </IonLabel>
                </IonItem>

            </IonCol>
        </IonRow>
            
        <IonRow>
            <IonCol>
                <h6>📍  {weatherResult?.name}</h6>
            </IonCol>
        </IonRow>
        
    </IonGrid>
  );

};

export default WeatherDisplay;


