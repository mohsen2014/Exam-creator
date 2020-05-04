import { View } from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import $template from '../templates/_basic';
import QuestionsView from './questions';
import QuestionCollection from '../models/questions.collection';

export default class Basic extends View {
  constructor({ el }) {
    super();
    this.$el = el;
    this.template = _.template($template);
    this.offset = 0;
    const self = this;
    $(window).scroll(() => {
      self.onScrollEvent($(window).scrollTop());
    });

    // $('body').on({
    //   touchmove(e) {
    //     // console.log($('html').scrollTop());
    //     self.onScrollEvent($('html').scrollTop());
    //   },
    // });
    $('body').on('click', 'a', function onclick(e) {
      e.preventDefault();
      $('.collapse.show').removeClass('show');
      $(this).closest('.card').find('.collapse').toggleClass('show');
    });
  }

  onScrollEvent(scrollTop) {
    const scrollPosition = $(document).height() - $(window).height();
    if (scrollTop === scrollPosition) {
      this.offset += 20;
      this.fetchData(() => {
        this.questionViews.trigger('append:model', { models: this.qCollection.lastFetchedModles });
      });
    }
  }

  renderQuestions() {
    this.qCollection = new QuestionCollection();
    // const self = this;
    this.fetchData(() => {
      this.questionViews = new QuestionsView({ model: this.qCollection, el: '#question' }).render();
    });
  }

  fetchData(callback) {
    $('body').append('<div id="loader"></div>');
    this.qCollection.fetch({
      data: {
        api_key: 'eE35nUA2NhjjXW4fKgx7q8zbzRCptuwdB9rPmPNB',
        offset: this.offset,
      },
      type: 'POST',
      success() {
        callback();
        $('#loader').remove();
      },
    });
  }

  render() {
    this.$el.html(this.template());
    this.renderQuestions();
    return this;
  }
}
