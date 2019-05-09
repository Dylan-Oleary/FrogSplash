import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID f894127d20c88273f09ce34887e18852e46d341c93d0433ee8e03cc6e08b96b5",
    }
});