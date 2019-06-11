export const required = value => (value ? undefined : 'Required');

export const maxLength = max => value =>
	value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const maxLength200 = maxLength(200);
export const requiredTrim = value =>
	!value || (value && value.trim() == '') ? 'Required' : undefined;
