// import { Bookmark } from './bookmarks.models';
// import { BookmarksService } from './bookmarks.service';
// import { TestBed } from '@angular/core/testing';
//
// xdescribe('dummy', () => {
//   it('runs a simple calculation', () => {
//     expect(1 + 4).toBe(5);
//   });
//
//   it('checks an array value', () => {
//     const data = [1, 2, 4];
//     expect(data).toEqual([1, 2, 4]);
//   });
// });
//
// xdescribe('BookmarksService', () => {
//   let bookmarkService: BookmarksService;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [BookmarksService]
//     });
//
//     bookmarkService = TestBed.get(BookmarksService);
//   });
//
//   describe('add()', () => {
//     let bookmark1: Bookmark;
//     beforeEach(() => {
//       bookmark1 = {id: 1};
//     });
//
//     it('adds given object to the item array', () => {
//       bookmarkService.add(bookmark1);      // Act
//       expect(bookmarkService.getAll()).toContain({id: 1}); // Assert
//     });
//
//     it('adds new objects to the end of the item array', () => {
//       const bookmark2: Bookmark = {id: 2};
//       bookmarkService.add(bookmark1);
//       bookmarkService.add(bookmark2);
//
//       expect(bookmarkService.getAll()[1]).toEqual({id: 2});
//       expect(bookmarkService.getAll()[0]).not.toEqual({id: 2});
//     });
//   });
// });
