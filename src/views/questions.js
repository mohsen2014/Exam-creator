import { View } from 'backbone';
import $ from 'jquery';
import QuestionView from './question';
import QuestionCollection from '../models/questions.collection';

export default class Question extends View {
  constructor({ model = [] }) {
    super();
    this.regions = {
      question: [$('#question'), new QuestionCollection()],
      selected: [$('#selected'), new QuestionCollection()],
    };
    this.model = model;
    this.on('append:model', this.appendToQuestions);
  }

  appendToQuestions({ models }) {
    const region = this.regions.question;
    this.mapModelToView(models, region[0]);
    // region[1].set(models);
  }

  renderQuestions(regionName) {
    const region = this.regions[regionName];
    if (!region[1] || !Array.isArray(region[1])) return;
    this.mapModelToView(region[1], region[0]);
  }

  mapModelToView(model = [], $element) {
    model.map((item) => $element.append(new QuestionView({ model: item }).render().el));
  }

  fetchSelectedModels(collection) {
    const arr = collection.groupBy((item) => item.get('selected'));
    return [arr.false, arr.true];
  }

  render() {
    const { regions } = this;
    this.cleanRegions();
    [regions.question[1], regions.selected[1]] = this.fetchSelectedModels(this.model);
    Object.keys(this.regions).forEach((regionName) => this.renderQuestions(regionName));
    return this;
  }

  cleanRegions() {
    this.regions.question[0].html('');
    this.regions.selected[0].html('');
  }
}
