export const required = value => (value ? undefined : "This Field is Required");

export const minValue = min => value =>
  value && value.length < min
    ? `Must be at least ${min} characters`
    : undefined;

export const minValue6 = minValue(6);

export const dateFormat = value => {
  const DATE_FORMAT = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

  return DATE_FORMAT.test(value)
    ? undefined
    : "Expected Birth Date to be in this format MM/DD/YYYY";
};

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
