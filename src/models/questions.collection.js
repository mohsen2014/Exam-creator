import { Collection } from 'backbone';
import Question from './question.model';

export default class Questions extends Collection {
  constructor(props) {
    super();
    this.model = Question;
    // this.set(props);
    // this.on('change:selected', this.onChange);
    this.on('add', this.onAdd);
    this.url = 'https://gama.ir/webservice/azmoonTestsList';
  }

  parse(response) {
    const NewModel = this.model;
    const models = response.data && Array.isArray(response.data)
    && response.data.map((item) => new NewModel(item));
    this.models = [...this.models, ...models];
    this.lastFetchedModles = models;
    return this.models;
  }

  onAdd(e) {

  }
}
