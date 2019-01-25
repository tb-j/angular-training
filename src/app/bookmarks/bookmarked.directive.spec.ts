import { Component, Provider } from '@angular/core';
import { Bookmark } from './bookmarks.models';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookmarkedDirective } from './bookmarked.directive';
import { BookmarksService } from './bookmarks.service';
import { By } from '@angular/platform-browser';
import Spy = jasmine.Spy;

@Component({
  template: `
    <div [tmBookmarked]="item" class="abc"></div>`
})
class DummyComponent {
  item: Bookmark;
}

const bookmarksServiceMock: Partial<BookmarksService> = {
  has: (id: number) => {
    return id === 1;
  }
};

describe('tmBookmarked', () => {
  let fixture: ComponentFixture<DummyComponent>;
  let component: DummyComponent;
  // let spy: Spy;

  beforeEach(() => {
    TestBed
      .configureTestingModule({
        declarations: [BookmarkedDirective, DummyComponent],
        providers: [
          <Provider>{
            provide: BookmarksService,
            useValue: bookmarksServiceMock,
          }
        ]
      })
      .compileComponents();

    fixture = TestBed.createComponent(DummyComponent);
    // spy = spyOn(bookmarksServiceMock, 'has');
    component = fixture.componentInstance;
  });

  it('compiles', () => {
    expect(component).toBeTruthy();
  });

  it('adds "bookmarked" class if item is bookmarked', () => {
    component.item = {id: 1};
    fixture.detectChanges();

    const host = fixture.debugElement.query(By.css('div'));
    expect(host.classes.bookmarked).toBe(true);
    expect(host.nativeElement.classList.contains('abc')).toBe(true);
    // expect(spy).toHaveBeenCalledWith(2);
  });

  it('does not add "bookmarked" class if item is not bookmarked', () => {
    component.item = {id: 2};
    fixture.detectChanges();

    const host = fixture.debugElement.query(By.css('div'));
    expect(host.classes.bookmarked).toBe(false);
  });

  it('adds "transparent" class when hosts image is clicked', () => {
    const host = fixture.debugElement.query(By.css('div'));
    component.item = {id: 1};

    host.triggerEventHandler('click', {target: {tagName: 'IMG'}});
    fixture.detectChanges();

    expect(host.classes.transparent).toBe(true);
  });

});
