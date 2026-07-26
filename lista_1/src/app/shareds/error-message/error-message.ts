import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  imports: [],
  templateUrl: './error-message.html',
  styleUrl: './error-message.css',
})
export class ErrorMessage {

  @Input() control: AbstractControl | null = null;

  get errorMessage(): string {

    const campo = this.control;

    if (!campo || (campo.untouched && campo.pristine)) {
      return '';
    }

    if (campo.hasError('required')) {
      return 'Campo obrigatório, patrão!';
    }

    if (campo.hasError('minlength')) {

      const tamanhoExigido = campo.errors?.['minlength'].requiredLength;
      return `Precisa de pelo menos ${tamanhoExigido} caracteres.`;
    }

    return '';
  }

}
