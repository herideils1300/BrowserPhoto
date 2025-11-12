import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageEditorPage } from './image-editor-page';

describe('ImageEditorPage', () => {
  let component: ImageEditorPage;
  let fixture: ComponentFixture<ImageEditorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageEditorPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageEditorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
