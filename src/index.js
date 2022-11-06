import './styles/global.css';
import header from "./modules/header";
import showWeather from './modules/controller';
import main from './modules/main';

document.body.append(header());
document.body.append(main());
showWeather()