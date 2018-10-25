import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderQuestions'
})
export class OrderQuestionsPipe implements PipeTransform {

  transform(questions: any[]): any {
    return questions.sort( (q1, q2) => q1.order - q2.order );
  }

}
