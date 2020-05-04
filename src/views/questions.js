import { View } from 'backbone';
import $ from 'jquery';
import QuestionView from './question';
import SelectedView from './selected';
import QuestionCollection from '../models/questions.collection';

export default class Question extends View {
  constructor({ model = [] }) {
    super();
    this.regions = {
      question: { element: $('#question .accordion') },
      selected: { element: $('#selected'), model: new QuestionCollection() },
    };
    this.model = model;
    const self = this;
    this.on('append:model', this.appendToQuestions);
    this.listenTo(model, 'change',
      (selectedModel) => (selectedModel.get('selected') ? this.appendToSelected(selectedModel) : this.removeFromSelected(selectedModel)));
    $('body').on('click', '.test-register', () => {
      console.log(self.regions.selected.model.toJSON());
    });
  }

  appendToSelected(model) {
    const selectedRegion = this.regions.selected;
    this.mapModelToView([model], selectedRegion.element, SelectedView);
    selectedRegion.model.add(model);
    this.replaceView(model, $(`#question #${model.cid}`), QuestionView);
    this.checkAndShowRegisterButton(selectedRegion.model);
  }

  checkAndShowRegisterButton(model) {
    if (!model || !model.length) return;
    if (model.length > 9) {
      $('#test-register').removeAttr('disabled');
      $('.ten-requierd').hide();
    } else {
      $('.ten-requierd').show();
      $('#test-register').attr({ disabled: true });
    }
  }

  removeFromSelected(model) {
    const selectedRegion = this.regions.selected;
    selectedRegion.model.remove(model);
    this.replaceView(null, $(`#selected #${model.cid}`), SelectedView);
    this.replaceView(model, $(`#question #${model.cid}`), QuestionView);
    this.checkAndShowRegisterButton(selectedRegion.model);
  }

  appendToQuestions({ models }) {
    const questionRegion = this.regions.question;
    this.mapModelToView(models, questionRegion.element, QuestionView);
  }

  mapModelToView(model = [], $element, ViewObject) {
    model.map((item) => $element.append(new ViewObject({ model: item }).render().el));
  }

  replaceView(model, $element, ViewObject) {
    if (!model) {
      $element.remove();
      return;
    }
    $element.html(new ViewObject({ model }).render().el);
  }

  render() {
    this.cleanRegions();
    this.appendToQuestions(this.model);
    return this;
  }

  cleanRegions() {
    this.regions.question.element.html('');
    this.regions.selected.element.html('');
  }
}
