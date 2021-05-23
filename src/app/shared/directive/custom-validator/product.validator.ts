import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Produto } from "src/app/model/produto";

/** A hero's name can't match the given regular expression */
export function productValidator(list: Produto[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const value = control.value;

    if (!value) {
      return null;
    }

    const hasInList = list.find( product => product.nome.toUpperCase() === value.toUpperCase());

    const productValid = hasInList != undefined;

    return !productValid ? { validProduct: true } : null;
  }
}