/**
 * The object that the API returns when requesting a list of users.
 */

/**
 * @typedef {Object} Name
 * @property {string} title - The title of the user (e.g., "Mr", "Ms").
 * @property {string} first - The first name of the user.
 * @property {string} last - The last name of the user.
 */

/**
 * @typedef {Object} Street
 * @property {number} number - The street number.
 * @property {string} name - The name of the street.
 */

/**
 * @typedef {Object} Coordinates
 * @property {string} latitude - The latitude of the location.
 * @property {string} longitude - The longitude of the location.
 */

/**
 * @typedef {Object} Timezone
 * @property {string} offset - The timezone offset (e.g., "-5:00").
 * @property {string} description - The description of the timezone.
 */

/**
 * @typedef {Object} Location
 * @property {Street} street - The street information.
 * @property {string} city - The city name.
 * @property {string} state - The state name.
 * @property {string} country - The country name.
 * @property {string|number} postcode - The postal code.
 * @property {Coordinates} coordinates - The geographical coordinates.
 * @property {Timezone} timezone - The timezone information.
 */

/**
 * @typedef {Object} Login
 * @property {string} uuid - The unique ID for the login.
 * @property {string} username - The username.
 * @property {string} password - The password.
 * @property {string} salt - The salt used for hashing.
 * @property {string} md5 - The MD5 hash of the password.
 * @property {string} sha1 - The SHA1 hash of the password.
 * @property {string} sha256 - The SHA256 hash of the password.
 */

/**
 * @typedef {Object} DateInfo
 * @property {string} date - The date string in ISO format.
 * @property {number} age - The age derived from the date.
 */

/**
 * @typedef {Object} Picture
 * @property {string} large - URL to the large picture.
 * @property {string} medium - URL to the medium picture.
 * @property {string} thumbnail - URL to the thumbnail picture.
 */

/**
 * @typedef {Object} User
 * @property {string} gender - The gender of the user.
 * @property {Name} name - The name of the user.
 * @property {Location} location - The location of the user.
 * @property {string} email - The email address of the user.
 * @property {Login} login - The login details of the user.
 * @property {DateInfo} dob - The date of birth of the user.
 * @property {DateInfo} registered - The registration date of the user.
 * @property {string} phone - The phone number of the user.
 * @property {string} cell - The cell phone number of the user.
 * @property {Object} id - The ID information.
 * @property {string} id.name - The ID type (e.g., "SIN").
 * @property {string} id.value - The ID value.
 * @property {Picture} picture - The user's pictures.
 * @property {string} nat - The nationality of the user.
 */

/**
 * @typedef {Object} Info
 * @property {string} seed - The seed used to generate the results.
 * @property {number} results - The number of results returned.
 * @property {number} page - The current page number.
 * @property {string} version - The version of the API.
 */

/**
 * @typedef {Object} Response
 * @property {User[]} results - The list of users.
 * @property {Info} info - Additional metadata about the response.
 */

export const ResponseTypes = {}
