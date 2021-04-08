import { AbstractControl, FormGroup } from '@angular/forms';
    
export function ConfirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: AbstractControl) => {
        const control = (formGroup as FormGroup).controls[controlName];
        const matchingControl = (formGroup as FormGroup).controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}