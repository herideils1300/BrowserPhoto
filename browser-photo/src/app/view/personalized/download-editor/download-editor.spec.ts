import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadEditor } from './download-editor';

describe('DownloadEditor', () => {
  let component: DownloadEditor;
  let fixture: ComponentFixture<DownloadEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
