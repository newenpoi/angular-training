import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSingleComponent } from './pokemon-single.component';

describe('PokemonSingleComponent', () => {
  let component: PokemonSingleComponent;
  let fixture: ComponentFixture<PokemonSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
