import axios from "axios";

const TOUR_GUIDE_API_BASE_URL = "https://localhost:44389/api/TourGuides";

class TourGuideService {
  getTourGuides() {
    return axios.get(TOUR_GUIDE_API_BASE_URL);
  }

  getTourGuideById(id) {
    return axios.get(TOUR_GUIDE_API_BASE_URL + "/" + id);
  }

  postTourGuide(tg) {
    return axios.post(TOUR_GUIDE_API_BASE_URL, tg);
  }

  updateTourGuide(id, tg) {
    return axios.put(TOUR_GUIDE_API_BASE_URL + "/" + id, tg);
  }
}

export default new TourGuideService();
