import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DbzAddPersonaje } from './dbz-add-personaje';

describe('DbzAddPersonaje', () => {
  let component: DbzAddPersonaje;
  let fixture: ComponentFixture<DbzAddPersonaje>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbzAddPersonaje],
    }).compileComponents();

    fixture = TestBed.createComponent(DbzAddPersonaje);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
