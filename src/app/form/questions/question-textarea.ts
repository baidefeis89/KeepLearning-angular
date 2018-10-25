import { QuestionBase } from './question-base';

export class TextareaQuestion extends QuestionBase<string> {
  controlType = 'textarea';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
