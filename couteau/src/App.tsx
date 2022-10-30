import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import FrontPage from './pages/FrontPage';
import Oraculo from './pages/Oraculo';
import Predictor from './pages/Predictor';
import Clima from './pages/Clima';
import Universidades from './pages/Universidades';
import AboutDeveloper from './pages/AboutDeveloper';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">

            <Route path="/" exact={true}>
              <Redirect to="/page/Couteau" />
            </Route>

             <Route path="/page/Couteau" exact={true} component={FrontPage}/>
             <Route path="/page/Predictor" exact={true} component={Predictor}/>
             <Route path="/page/Oraculo" exact={true} component={Oraculo}/>
             <Route path="/page/Universidades" exact={true} component={Universidades}/>
             <Route path="/page/Clima" exact={true} component={Clima}/>
             <Route path="/page/Programador" exact={true} component={AboutDeveloper}/>

          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
