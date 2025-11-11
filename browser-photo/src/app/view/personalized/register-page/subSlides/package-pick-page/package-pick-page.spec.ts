import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagePickPage } from './package-pick-page';

describe('PackagePickPage', () => {
  let component: PackagePickPage;
  let fixture: ComponentFixture<PackagePickPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackagePickPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackagePickPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
