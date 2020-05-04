import { View } from 'backbone';
import _ from 'underscore';
import { $question } from '../templates/_question';

export default class Question extends View {
  constructor({ model }) {
    super({
      tagName: 'div',
      model,
      className: '',
      attributes: {
        id: model.cid,
      },
      events: {
        'click button': 'selectQuestion',
      },
    });
    this.template = _.template($question);
    this.events = {
      'click:button': 'selectQuestion',
    };
  }

  selectQuestion() {
    this.model.toggleSelect();
  }

  render() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
}
