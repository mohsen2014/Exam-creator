import $ from 'jquery';
import BasicView from './views/basic';

const Application = () => ({
  start: () => {
    const $content = $('#content');
    new BasicView({ el: $content }).render();
  },
});
$(() => {
  Application().start();
});
