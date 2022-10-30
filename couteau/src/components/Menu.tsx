import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {  cloudyNightOutline, cloudyNightSharp, schoolSharp, schoolOutline ,colorWandOutline, colorWandSharp, mailOutline, mailSharp, flaskOutline, flaskSharp, eyeOutline, eyeSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Couteau',
    url: '/page/Couteau',
    iosIcon: flaskOutline,
    mdIcon: flaskSharp
  },
  {
    title: 'Predictor',
    url: '/page/Predictor',
    iosIcon: eyeOutline,
    mdIcon: eyeSharp
  },
  {
    title: 'Oráculo',
    url: '/page/Oraculo',
    iosIcon: colorWandOutline,
    mdIcon: colorWandSharp
  },
  {
    title: 'Universidades',
    url: '/page/Universidades',
    iosIcon: schoolOutline,
    mdIcon: schoolSharp
  },
  {
    title: 'Clima',
    url: '/page/Clima',
    iosIcon: cloudyNightOutline,
    mdIcon: cloudyNightSharp
  },
  {
    title: 'Programador',
    url: '/page/Programador',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>🔪 Couteau App</IonListHeader>
          <IonNote></IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>


      </IonContent>
    </IonMenu>
  );
};

export default Menu;
