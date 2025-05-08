export const required = value => (value ? undefined : 'Це поле є обов\'язковим');

export const mustBeNumber = value => (isNaN(value) ? 'Має бути числом' : undefined);

export const minValue = min => value =>
    isNaN(value) || value >= min ? undefined : `Має бути більше або дорівнює ${min}`;

export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined);

export const isDate = value => {
    if (!value) return undefined;
    try {
        const date = new Date(value);
        return isNaN(date.getTime()) ? 'Невірний формат дати' : undefined;
    } catch 
         {
        return 'Невірний формат дати';
    }
};