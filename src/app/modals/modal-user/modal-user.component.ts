import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { UsersService } from '../../services/users.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
 selector: 'app-modal-user',
 standalone: true,
 imports: [
   MatDialogModule,
   FormsModule,
   CommonModule
],
 templateUrl: './modal-user.component.html',
 styleUrls: ['./modal-user.component.scss']
})
export class ModalUserComponent {
  @Input() searchId: string = '';
  dados: any = null;
  searchResult: any = null;

 constructor(
   private usersService: UsersService,
   public dialogRef: MatDialogRef<ModalUserComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any) {}
    
    onSearch(): void {
      if (!this.searchId) return; // Verifica se o ID foi digitado  
      this.usersService.getUserById(this.searchId).subscribe(result => {
        this.dados = result;
      });
    }    
 
    onBack(): void {
      this.dialogRef.close();
   }
}