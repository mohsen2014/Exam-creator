import { View } from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import $template from '../templates/_basic';
import QuestionsView from './questions';
import QuestionCollection from '../models/questions.collection';
import '../styles/reset.css';
import '../styles/basic.css';


export default class Basic extends View {
  constructor({ el }) {
    super();
    this.$el = el;
    this.template = _.template($template);
    this.offset = 0;
    $(window).scroll(() => {
      if ($(window).scrollTop() === $(document).height() - $(window).height()) {
        this.offset += 1;
        this.fetchData(() => {
          this.questionViews.trigger('append:model', { models: this.qCollection.lastFetchedModles });
        });
      }
    });

    $('body').on('click', 'a', function onclick(e) {
      e.preventDefault();
      $('.collapse.show').removeClass('show');
      $(this).closest('.row').find('.collapse').toggle('show');
    });
  }

  renderQuestions() {
    this.qCollection = new QuestionCollection();
    // const self = this;
    this.fetchData(() => {
      this.questionViews = new QuestionsView({ model: this.qCollection, el: '#question' }).render();
    });
  }

  fetchData(callback) {
    this.qCollection.fetch({
      data: {
        api_key: 'eE35nUA2NhjjXW4fKgx7q8zbzRCptuwdB9rPmPNB',
        offset: this.offset,
      },
      type: 'POST',
      success() {
        callback();
      },
    });
  }

  render() {
    this.$el.html(this.template());
    this.renderQuestions();
    return this;
  }
}
