import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DbzLista } from './dbz-lista';

describe('DbzLista', () => {
  let component: DbzLista;
  let fixture: ComponentFixture<DbzLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbzLista],
    }).compileComponents();

    fixture = TestBed.createComponent(DbzLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
