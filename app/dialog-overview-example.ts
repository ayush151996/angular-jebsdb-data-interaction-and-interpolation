import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface InterData {
  
  nammesent: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'dialog-overview-example.html',
  styleUrls: ['dialog-overview-example.css'],
})
export class DialogOverviewExample {


  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {namesent: this.nameoverviewtosend}
    });

   
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: InterData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */