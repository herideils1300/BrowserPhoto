import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageStatsPage } from './package-stats-page';

describe('PackageStatsPage', () => {
  let component: PackageStatsPage;
  let fixture: ComponentFixture<PackageStatsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackageStatsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
