import { API_URL, STARTING_PAGE, CARDS_ON_PAGE } from '@/constants';
import * as ResponseTypes from '@/types/response';

const { Response } = ResponseTypes;

/**
 * Fetches a list of users from the API.
 *
 * @param {number} [page=STARTING_PAGE] - The page number to fetch.
 * @param {number} [cards=CARDS_ON_PAGE] - The number of users to fetch per page.
 * @returns {Promise<Response>} A promise that resolves to the list of users and metadata.
*/
export async function getUsersList(page = STARTING_PAGE, cards = CARDS_ON_PAGE) {
  const response = await fetch(`${API_URL}/?page=${page}&results=${cards}`);

  if (!response.ok) {
    throw new Error(response.status);
  }

  const { results } = await response.json();
  return results;
};
