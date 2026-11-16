import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayamarJacaranda } from './playamar-jacaranda';

describe('PlayamarJacaranda', () => {
  let component: PlayamarJacaranda;
  let fixture: ComponentFixture<PlayamarJacaranda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayamarJacaranda],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayamarJacaranda);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
