import CONSTANTS from '../data/constants';

export default class ApiService {
  static async getAllSurah() {
    try {
      const response = await fetch(`${CONSTANTS.API_BASE_URL}/surah`);
      const responseJson = await response.json();
      return responseJson.data;
    } catch (error) {
      return error;
    }
  }

  static async getSurah(surahIndex) {
    try {
      const response = await fetch(`${CONSTANTS.API_BASE_URL}/surah/${surahIndex}`);
      const responseJson = await response.json();
      return responseJson.data;
    } catch (error) {
      return error;
    }
  }
}
