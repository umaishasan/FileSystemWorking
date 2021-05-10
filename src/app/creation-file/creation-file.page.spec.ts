import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreationFilePage } from './creation-file.page';

describe('CreationFilePage', () => {
  let component: CreationFilePage;
  let fixture: ComponentFixture<CreationFilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationFilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreationFilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
