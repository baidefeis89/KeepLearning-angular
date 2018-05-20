import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Icourses } from '../../cursos/interfaces/icourses';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  legend = 'Fruits exports';
  view = [600, 400];
  coursesViews: {name: string, value: number}[] = [];
  coursesStatistics: any = [];
  topicsStatistics: any = [];
  paragraphsStatistics: any = [];
  statistics: Icourses[];

  constructor( private adminService: AdminService ) { }

  ngOnInit() {
    this.adminService.getStatistics().subscribe( (res:Icourses[]) => {
      this.statistics = res
      this._getCoursesViews();
      this._getCoursesStatistics();
      this._asdf();
    });
  }

  private _getCoursesViews() {
    this.statistics.map( curso => {
      let visualizaciones = 0;
      curso.topics.map( topic => {
        topic.paragraphs.map( t => visualizaciones += t.visits)
      })
      this.coursesViews.push({name:curso.title, value: visualizaciones});
      this.coursesViews = [...this.coursesViews];
    })
  }

  private _getCoursesStatistics() {
    let data = [];
    this.statistics.map( curso => {
      let courseInfo = [];
      curso.topics.map(
        t => t.paragraphs.map( p => {
          courseInfo.push({name:p.title, value: p.visits})
        })
      )
      data.push({title: curso.title, data: courseInfo})
    })
    this.coursesStatistics = data;
  }

  private _asdf() {
    //visualizaciones por tema
    let info = [];
    this.statistics.map( (curso, index) => {
      info.push({curso: curso.title, temas: []})
      curso.topics.map( tema => {
        let visualizaciones = 0;
        tema.paragraphs.map( p => visualizaciones += p.visits);
        info[index].temas.push({name: tema.title, value: visualizaciones});
      })
    })
    console.log(info);
  }




}
