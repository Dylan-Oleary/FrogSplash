import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 7401e4af8082593c5467cfd13f3f2aa4078aae14cd28e70265498a2f77d77439",
    }
});