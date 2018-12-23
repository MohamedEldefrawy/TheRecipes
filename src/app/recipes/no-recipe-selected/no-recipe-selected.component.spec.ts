import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRecipeSelectedComponent } from './no-recipe-selected.component';

describe('NoRecipeSelectedComponent', () => {
  let component: NoRecipeSelectedComponent;
  let fixture: ComponentFixture<NoRecipeSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoRecipeSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoRecipeSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
