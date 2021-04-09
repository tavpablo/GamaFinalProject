import { Component } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/base/base.component';

@Component({
  selector: 'app-recoverypass',
  templateUrl: './recoverypass.component.html',
  styleUrls: ['./recoverypass.component.scss']
})

export class RecoverypassComponent extends BaseComponent {

  senhaForm!: AbstractControl; 

  ngOnInit(): void {
  }

  recoverPassword()
  {
    return true;
  }

}
