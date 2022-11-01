import './Universidades.css';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButtons, IonMenuButton, IonCardContent, IonInput, IonButton, IonIcon } from '@ionic/react';
import {IonGrid, IonRow, IonCol, useIonAlert, IonItem, IonLabel, IonAccordionGroup,IonAccordion } from '@ionic/react';
import {searchOutline}  from 'ionicons/icons';
import {useState} from 'react';
import {CapacitorHttp, HttpResponse} from '@capacitor/core';

/* 
  Programa que acepte el nombre de un pais en ingles: muestre las universidades de Ese pais,  
  url: http://universities.hipolabs.com/search?country=Dominican+Republic , luego mostrar el nombre, dominio y link a pagina web
  de cada universidad.  
*/

const Universidades: React.FC = () => {

  const [presentAlert] = useIonAlert();

  const [universities, setUniversities] = useState<Array<University>>([]);
  const [searchTerm, setSearchTerm] = useState<string>();

  interface University{
    name : string;
    domains: Array<string>;
    web_pages: Array<string>;
  };

  const getUnivertistiesByName = async (universityName : string = "") => {

    try {
      
      const options = {
        url : "http://universities.hipolabs.com/search",
        params : {country : universityName}
      };

      const httpResult : HttpResponse = await CapacitorHttp.get(options);

      const listUniversity : Array<University> = httpResult.data;

      setUniversities(listUniversity);

    } catch (error) {
      
        presentAlert({
          header: "Error",
          message: "Occurrio un error, verifique que relleno los campos o su conexión a internet.",
          buttons: ["OK"]
        });

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
                      <h4>🎓 Universidades:</h4>
                 </IonCol>
              </IonRow>

              <IonRow>
                
                <IonCol size='9'>
                  <IonItem>
                    <IonInput placeholder='Mexico' onIonChange={(e) => setSearchTerm(String(e.detail.value))}></IonInput>
                  </IonItem>
                </IonCol>

                <IonCol size='3'>
                    <IonButton onClick={()=> getUnivertistiesByName(searchTerm)}><IonIcon ios={searchOutline} md={searchOutline}></IonIcon></IonButton>
                </IonCol>

              </IonRow>

              <IonRow>
                <IonCol size='12'>
                  
                  <IonAccordionGroup>
                    
                    {
                      universities.map((uni,idx) => (

                      <IonAccordion value={uni.name} key={idx}>
                          <IonItem slot="header" color="light">
                            <IonLabel>{uni.name}</IonLabel>
                          </IonItem>

                          <div className="ion-padding" slot="content">                           
                              <IonLabel>Dominios:</IonLabel>
                              <IonLabel>{uni.domains.join(', ')}</IonLabel>
                          </div>
                          
                          <div className="ion-padding" slot="content">                                        
                              <IonLabel>Página: <a href={uni.web_pages[0]}> {uni.web_pages[0]} </a></IonLabel>
                          </div>
                      </IonAccordion>

                      ))
                    }

                  </IonAccordionGroup>

                </IonCol>
              </IonRow>

            </IonGrid>

      </IonContent>

    </IonPage>
  );
};

export default Universidades;