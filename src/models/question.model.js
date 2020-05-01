import { Model } from 'backbone';

export default class Question extends Model {
  constructor({ ...props }) {
    super({
      ...props,
      selected: false,
      order: null,
    });
  }

  toggleSelect() {
    this.set({
      selected: !this.get('selected'),
    });
  }
}
