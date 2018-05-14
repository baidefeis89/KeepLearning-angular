import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderTopicEditComponent } from './render-topic-edit.component';

describe('RenderTopicEditComponent', () => {
  let component: RenderTopicEditComponent;
  let fixture: ComponentFixture<RenderTopicEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderTopicEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderTopicEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
