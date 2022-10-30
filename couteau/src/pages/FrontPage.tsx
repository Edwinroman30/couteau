import {IonContent, IonPage, IonIcon, IonGrid, IonRow, IonTitle, IonItem} from '@ionic/react';
import {arrowForwardOutline}  from 'ionicons/icons';
import './FrontPage.css';

const FrontPage : React.FC = () => {
    return (
        <IonPage>
            <IonContent>

                <IonGrid className='flex-container'>

                    <IonTitle className='ion-margin text-center'>Couteau</IonTitle>

                    <IonRow>
                        <img className='couteau-img'
                                src="./assets/img/couteau-suisse-victorinox-usb.jpg" />
                    </IonRow>

                    <IonItem>
                         <IonIcon slot="start" ios={arrowForwardOutline} md={arrowForwardOutline} />
                    </IonItem>

                    <small>Explore las opciones de nuestra couteau app.</small>
                </IonGrid>


            </IonContent>
        </IonPage>
    );
}

export default FrontPage;