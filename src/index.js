import './styles/global.css';
import header from './modules/header';
import main from './modules/main';
import getUserInput from './modules/controller';

document.body.append(header());
document.body.append(main());
document
  .querySelector('input[type=search]')
  .addEventListener('keydown', getUserInput);
