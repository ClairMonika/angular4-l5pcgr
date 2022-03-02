import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 4';
  private allItems: any[];
  listItems: any[];
  pageSize = 2;
  totalRecords = 0;
  currentPage = 1;

  ngOnInit() {
    this.allItems = [
      {
        id: '1',
        dateCreated: '2022-02-11T02:57:46.777+0000',
        dateModified: '2022-02-11T02:57:46.777+0000',
        transactionId: 'tx1',
        userCreatedBy: 'DY02879',
        userModifiedBy: 'DY02879',
        sourceId: 'src_121',
        applicationId: '101',
        studentNumber: '209892',
        studentName: 'Nandani',
        efc: '1500',
        gpa: '3.0',
        status: 'New',
        scholarshipCode: 'DIRECT',
      },
      {
        id: '2',
        dateCreated: '2022-02-14T11:51:41.733+0000',
        dateModified: '2022-02-14T11:51:41.733+0000',
        transactionId: 'a777d32e-4ca7-458a-82f1-b4f15eac2755',
        userCreatedBy: 'DY02879',
        userModifiedBy: 'DY02879',
        applicationId: 'app-id-1001',
        studentNumber: '208990',
        studentName: 'John',
        efc: '2200',
        gpa: '3.0',
        status: 'New',
        scholarshipCode: 'EXNEW',
      },
      {
        id: '3',
        dateCreated: '2022-02-14T11:51:41.733+0000',
        dateModified: '2022-02-14T11:51:41.733+0000',
        transactionId: 'a777d32e-4ca7-458a-82f1-b4f15eac2755',
        userCreatedBy: 'DY02879',
        userModifiedBy: 'DY02879',
        applicationId: 'app-id-1001',
        studentNumber: '208990',
        studentName: 'Johni',
        efc: '2200',
        gpa: '3.0',
        status: 'New',
        scholarshipCode: 'EXNEW',
      },
      {
        id: '4',
        dateCreated: '2022-02-14T11:51:41.733+0000',
        dateModified: '2022-02-14T11:51:41.733+0000',
        transactionId: 'a777d32e-4ca7-458a-82f1-b4f15eac2755',
        userCreatedBy: 'DY02879',
        userModifiedBy: 'DY02879',
        applicationId: 'app-id-1001',
        studentNumber: '208990',
        studentName: 'Nimit',
        efc: '2200',
        gpa: '3.0',
        status: 'New',
        scholarshipCode: 'EXNEW',
      },
    ];
    this.totalRecords = 4;
    this.setTableDataFn();
  }
  setCurrentPage(c) {
    this.currentPage = c;
    this.setTableDataFn();
  }
  setPerPageLimit(s) {
    this.pageSize = s;
    this.setTableDataFn();
  }
  setTableDataFn() {
    this.listItems = this.allItems.slice(
      (this.currentPage - 1) * this.pageSize,
      this.currentPage * this.pageSize
    );
  }
}
