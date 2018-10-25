import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Icourses } from '../../../cursos/interfaces/icourses';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  @Input() course: Icourses;
  @Output() next: EventEmitter<void> = new EventEmitter<void>();
  form: FormGroup;
  errorMsg: string;

  constructor( private fb: FormBuilder, private adminService: AdminService ) { }

  ngOnInit() {
    this.createForm();
  }

  nextSection() {
    const formModel = this.prepareSave();
    this.adminService.updateCourse(formModel).subscribe(
      res => {
        this.course.title = res.title;
        this.course.description = res.description;
        this.course.image = res.image ? res.image : this.course.image;
        this.next.emit()
      },
      err => this.errorMsg = err
    )
  }

  createForm() {
    this.form = this.fb.group({
      _id: [this.course._id],
      title: [''],
      description: [''],
      image: null
    });
  }

  onFileChange(event) {
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      this.form.get('image').setValue(file);
    }
  }

  private prepareSave(): any {
    let input = new FormData();
    input.append('_id', this.form.get('_id').value);
    input.append('title', this.form.get('title').value);
    input.append('description', this.form.get('description').value);
    input.append('image', this.form.get('image').value);
    return input;
  }
}
