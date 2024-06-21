import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
 selector: 'app-modal-allusers',
 standalone: true,
 imports: [MatDialogModule, CommonModule],
 templateUrl: './modal-allusers.component.html',
 styleUrls: ['./modal-allusers.component.scss']
})
export class ModalAllUsersComponent {
  usuario: any;

 constructor(
    public dialogRef: MatDialogRef<ModalAllUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

 onNoClick(): void {
    this.dialogRef.close();
 }
}
