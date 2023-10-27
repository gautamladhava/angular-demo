import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTypeComponent } from './blog-type.component';

describe('BlogTypeComponent', () => {
  let component: BlogTypeComponent;
  let fixture: ComponentFixture<BlogTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogTypeComponent]
    });
    fixture = TestBed.createComponent(BlogTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
