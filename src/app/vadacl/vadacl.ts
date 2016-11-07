
import { AbstractControl, FormGroup, FormArray } from '@angular/forms';
import { ValidationMethods } from './validation-methods';

/*
 The Vadacl class can be used as the superclass for a component that implements validation, or as an injected service.
 */
export class Vadacl {

    applyRules(domainClass: any, propertyName: string, validationOverrides ?: any  ) : any[] {
        let validators: any[] = [];

        //Collect the property validations defined in the domain class (if any).
        let propertyValidations = domainClass.validations ? ( domainClass.validations[ propertyName ] || {} ) : {};

        //Apply any validation overrides and additional validations.
        let mergedValidations = this.mergeValidations( propertyValidations, validationOverrides );

        for( let mv in mergedValidations ) {
            //Parse the argument values to apply to the validation method.
            let validatorArguments = this.getValidatorArguments( this.getMethodDeclaredArguments( ValidationMethods[ mv ] ), mergedValidations[ mv ] );
            /*
             Execute the validation method, which will return a validator that the Angular reactive form classes will
             trigger on a value change, and add that validator to the validators array.
             */
            validators.push( ValidationMethods[ mv ].apply( null, validatorArguments ) );
        }

        return validators;
    }

    /*
     Converts function to a string and then uses regular expressions to pull out the argument names.  The argument names
     are denoted as object literal properties with values equal to their position in the list of arguments (the positions
     are needed to help place the validation method argument values in the correct order).
     */
    getMethodDeclaredArguments( fn: any ) : any {
        let methodDeclarationRegExp = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
        let argumentSplit = /,/;
        let stripCommentsRegExp = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

        let methodArguments = {};
        let argumentPosition = 0;

        let methodAsString = fn.toString().replace( stripCommentsRegExp, '' );
        let methodDeclaration = methodAsString.match( methodDeclarationRegExp );
        let argumentArray = methodDeclaration[ 1 ].split( argumentSplit );

        for( let argIndex in argumentArray) {
            methodArguments[ argumentArray[ argIndex ].replace(/\s/g,'') ] = argumentPosition++;
        }

        return methodArguments;
    }

    /*
     The arguments passed into the call to the validation method are organized in the proper order based on the order
     of the argument names in the validation method.
     */
    getValidatorArguments( argumentDeclarations: any, validatorArguments: any ) : any[] {
        let executionArguments: any[] = [];
        for( let arg in argumentDeclarations ) {
            executionArguments[ argumentDeclarations[ arg ] ] = validatorArguments[ arg ] || null;
        }
        return executionArguments;
    }

    /*
     Merges the previous validation settings with any new settings.
     */
    mergeValidations( baseValidations: any, overrideValidations: any ) : any {
        for( let validation in overrideValidations ) {
            if( baseValidations[ validation ] == undefined ) {
                baseValidations[ validation ] = overrideValidations[ validation ]
            } else {
                for( let setting in overrideValidations[ validation ] ) {
                    baseValidations[ validation ][ setting ] = overrideValidations[ validation ][ setting ]
                }
            }
        }
        return baseValidations;
    }

    /*
     Determines whether the errors for the form element should be displayed.  By default, returns false
     if the element is still marked as untouched.
     */
    showErrors( formElement: AbstractControl|FormGroup|FormArray, onlyAfterTouched: boolean = true ) : boolean {
        let elementActive = onlyAfterTouched ? formElement.touched : true;
        return ( formElement.dirty && formElement.invalid && elementActive ) ? true : false
    }

    /*
     Returns array of error messages. By default, error messages only returned when control is dirty.
    */
    getControlErrors( control: AbstractControl, onlyWhenDirty: boolean = true ) : string[] {
        let errorMessages: string[] = [];
        if( ( !onlyWhenDirty || control.dirty ) && control.errors ) {
            let errorArray = Object.keys( control.errors );
            for ( let err in errorArray ) {
                if ( control.errors[ errorArray[ err ] ].message ) {
                    errorMessages.push( control.errors[ errorArray[ err ] ].message );
                }
            }
        }
        return errorMessages;
    }

    /*
     Ensures a programmatic change to an AbstractControl value is marked as dirty (and by default as touched)
     prior to the change, properly invoking validation and the display of any validation errors.
    */
    changeControlValue( control: AbstractControl, value: any, markTouched: boolean = true ) : void {
        control.markAsDirty();
        control.markAsTouched( markTouched );
        control.setValue( value );
    }

}
