import {Header} from '../Header/Header';
import { Popular } from '../Popular/Popular';


import s from './app.module.scss';


export function App() {
  return (
   <div className="site-wrapper">
    <Header/>
    <div className="main">
      <Popular/>
    </div>
   </div>
  );
}
