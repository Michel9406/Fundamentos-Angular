import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderizandoListasComponent } from './renderizando-listas.component';

describe('RenderizandoListasComponent', () => {
  let component: RenderizandoListasComponent;
  let fixture: ComponentFixture<RenderizandoListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenderizandoListasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderizandoListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
