/**
 * The date response object
 * @typedef {{unix: number, utc: string}} DateResponse
 */

/**
 * Generates the response object, that contains the unix and utc timestamps
 * @param {Date} date - A date object
 * @returns {DateResponse}
 */
function generateResponse(date) {
  return {
    unix: date.getTime(),
    utc: date.toUTCString(),
  };
}

/**
 * Validates a date object
 * @param {Date} date - the date object
 * @returns {boolean}
 */
function isValidDate(date) {
  return date.toUTCString() !== "Invalid Date";
}

/**
 * Parses a date (formatted string/timestamps number) to a date response object.
 * If the date is an empty string or null, returns the current date response.
 * If the conversion fails, returns null.
 * @param {string|number} date - A string/number that represents a date
 * @returns {DateResponse|null}
 */
function parseDate(date) {
  // handle empty inputs
  if (!date) return generateResponse(new Date());

  let parsedDate = new Date(date);

  if (!isValidDate(parsedDate)) parsedDate = new Date(+date);
  if (!isValidDate(parsedDate)) return null;

  return generateResponse(parsedDate);
}

module.exports = { generateResponse, parseDate, isValidDate };
