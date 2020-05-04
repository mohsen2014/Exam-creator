import { View } from 'backbone';
import _ from 'underscore';
import { $selected } from '../templates/_question';

export default class Selected extends View {
  constructor({ model }) {
    super({
      tagName: 'div',
      model,
      attributes: {
        id: model.cid,
      },
      events: {
        'click button': 'selectQuestion',
      },
    });
    this.template = _.template($selected);
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
