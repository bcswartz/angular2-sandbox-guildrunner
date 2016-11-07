
import { AbstractControl, Validators } from '@angular/forms';
import { Messages } from './messages/messages-en';

/*
 The ValidationMethods class contains all of the validation methods defined for use by vadacl.  Validation methods
 provided in Angular 2 are wrapped and leveraged whenever practical.
 */
export class ValidationMethods {

    //Modeled after the official Angular 2 Required validators value checks
    static isEmpty( control: AbstractControl ) {
        let v = control.value;
        if ( v === undefined || v === null || ( typeof v === 'string' && v == '' ) ) {
            return true;
        } else {
            return false;
        }
    }

    static required( message ?: string ) {
        let msg = message || Messages.required;
        return function ( control: AbstractControl ) {
            return ValidationMethods.isEmpty( control ) ? { 'required': { 'isEmpty': true, 'message': msg } } : null;
        }
    }

    static minLength( minLength: number, message ?: string ) {
        let msg = message || Messages.minLength;
        return function ( control: AbstractControl ) {
            //Use and invoke the official Angular 2 minLength Validator
            let baseValidator = Validators.minLength( minLength );
            let outcome = baseValidator( control) ;
            if ( outcome ) {
                //Append the message
                outcome[ 'minlength' ].message = msg;
            }
            return outcome;
        }
    }

    static maxLength( maxLength: number, message ?: string ) {
        let msg = message || Messages.maxLength;
        return function ( control: AbstractControl ) {
            //Use and invoke the official Angular 2 maxLength Validator
            let baseValidator = Validators.maxLength( maxLength );
            let outcome = baseValidator( control) ;
            if ( outcome ) {
                //Append the message
                outcome[ 'maxlength' ].message = msg;
            }
            return outcome;
        }
    }

    static pattern( pattern: string, message ?: string ) {
        let msg = message || Messages.pattern;
        return function ( control: AbstractControl ) {
            //Use and invoke the official Angular 2 pattern Validator
            let baseValidator = Validators.pattern( pattern );
            let outcome = baseValidator( control) ;
            if ( outcome ) {
                //Append the message
                outcome[ 'pattern' ].message = msg;
            }
            return outcome;
        }
    }

    static withinLength( minLength: number, maxLength: number, message ?: string ) {
        let msg = message || Messages.withinLength;
        return function ( control: AbstractControl ) {
            //Do not display if the control is empty
            if( ValidationMethods.isEmpty( control ) ){
                return null;
            }
            let v = control.value;
            return v.length < minLength || v.length > maxLength ?
            { 'withinlength': { 'minLength': minLength, 'maxLength': maxLength, 'actualLength': v.length, 'message': msg } } :
                null
        }
    }

}


