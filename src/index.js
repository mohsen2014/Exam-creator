import $ from 'jquery';
import BasicView from './views/basic';
import './styles/index.scss';

const Application = () => ({
  start: () => {
    const $content = $('#root');
    new BasicView({ el: $content }).render();
  },
});
$(() => {
  Application().start();
});
