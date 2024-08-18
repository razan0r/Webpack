import { handleSubmit } from './js/apiHandler';
import './styles/base.scss';
import './styles/header.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/main.scss';

document.getElementById('form').addEventListener('submit', handleSubmit);
