const dateRegex = /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|1\d|2\d|3[01])$/;
exports.isValidDate = (date) => {
  return dateRegex.test(date);
};
