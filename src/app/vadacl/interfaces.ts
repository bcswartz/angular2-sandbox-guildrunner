/*
 Interfaces that can be used by the TypeScript compiler to enforce the proper key/value pairs for the validation options.
 */
interface RequiredSettings {
    message ?: string
}

interface MinLengthSettings {
    minLength : number,
    message ?: string
}

interface MaxLengthSettings {
    maxLength : number,
    message ?: string
}

interface PatternSettings {
    pattern : string,
    message ?: string
}

interface WithinLengthSettings {
    minLength : number,
    maxLength : number,
    message ?: string
}

/*
 Interface for defining any and all known validation methods for a given domain object property
 */
interface PropertyValidations {
    required ?: RequiredSettings,
    minLength ?: MinLengthSettings,
    maxLength ?: MaxLengthSettings,
    pattern ?: PatternSettings,
    withinLength ?: WithinLengthSettings
}

/*
 Interface that can be implemented by domain classes to enforce the presence of a "validations" property object literal.
 */
interface Validatable {
    validations: { [ index: string ]: any };
}

export { PropertyValidations, Validatable }

