import axios from "axios";

export const apiRoute = {
  Offers: "/offers"
};

const BASE_URL = "https://6191a94e-cf01-483e-996a-d38662fc4f2b.mock.pstmn.io/test";
const REQUEST_TIMEOUT = 2000;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: REQUEST_TIMEOUT
});

export { api };
