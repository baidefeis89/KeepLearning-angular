import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';

@Component({
  selector: 'ae-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {
  @Input() title: string;
  @Input() body: string;
  @Input() info: boolean;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
