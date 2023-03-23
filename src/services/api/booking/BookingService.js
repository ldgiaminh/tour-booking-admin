import axios from "axios";

const BOOKING_API_BASE_URL = "https://localhost:44389/api/Bookings";

class BookingService {
  getBookings() {
    return axios.get(BOOKING_API_BASE_URL);
  }

  getBookingById(id) {
    return axios.get(BOOKING_API_BASE_URL + "/" + id);
  }

  postBooking(tg) {
    return axios.post(BOOKING_API_BASE_URL, tg);
  }

  updateBooking(id, tg) {
    return axios.put(BOOKING_API_BASE_URL + "/" + id, tg);
  }
}

export default new BookingService();
