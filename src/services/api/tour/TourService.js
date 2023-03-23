import axios from "axios";

const TOUR_API_BASE_URL = "https://localhost:44389/api/Tours";

class TourService {
  getTours() {
    return axios.get(TOUR_API_BASE_URL);
  }

  getTourById(id) {
    return axios.get(TOUR_API_BASE_URL + "/" + id);
  }

  postTour(tg) {
    return axios.post(TOUR_API_BASE_URL, tg);
  }

  updateTour(id, tg) {
    return axios.put(TOUR_API_BASE_URL + "/" + id, tg);
  }
}

export default new TourService();
