import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LugarAgregarPage } from './lugar-agregar.page';

describe('LugarAgregarPage', () => {
  let component: LugarAgregarPage;
  let fixture: ComponentFixture<LugarAgregarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LugarAgregarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LugarAgregarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
