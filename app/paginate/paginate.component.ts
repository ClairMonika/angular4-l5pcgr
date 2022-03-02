import { Component } from '@angular/core';
import { PagerService } from './pager.service';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css'],
})
export class PaginateComponent {
  @Input() pageSize;
  @Input() totalRecords;
  @Input() currentPage;
  @Output() setCurrentPageFn = new EventEmitter<number>();
  @Output() setPerPageFn = new EventEmitter<number>();

  resultPerPage = [1, 2, 3, 4];
  private allItems: any[];
  pager: any = {};
  pagedItems: any[];

  constructor(private pagerService: PagerService) {}
  ngOnInit() {
    this.setPage(1);
  }
  setPerPage(perPage: number) {
    this.pageSize = perPage;
    this.setPager();
    this.setPerPageFn.emit(perPage);
    this.setCurrentPageFn.emit(1);
  }
  setPage(page: number) {
    if (this.pager) {
      if (page < 1 || page > this.totalRecords) {
        return;
      }
    }
    this.currentPage = page;
    this.setPager();
    //console.log('pager', this.pager);
    this.setCurrentPageFn.emit(page);
  }
  setPager() {
    this.pager = this.pagerService.getPager(
      this.totalRecords,
      this.currentPage,
      true,
      this.pageSize
    );
  }
}
