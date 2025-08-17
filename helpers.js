/**
 * The date response object
 * @typedef {{unix: number, utc: string}} DateResponse
 */

/**
 * Generates the response object, that contains the unix and utc timestamps
 * @param {Date} date - A date object
 * @returns {DateResponse}
 */
function generateResponse(date) {}

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

  let parsed_date = new Date(data);

  if (!isValidDate(parsed_date)) parsed_date = new Date(+date);
  if (!isValidDate(parsed_date)) return null;

  return generateResponse(parsed_date);
}

module.exports = { generateResponse, parseDate, isValidDate };
