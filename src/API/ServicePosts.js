import { URL } from "../constants.js";

const ServicePosts = async () => {
    const data = await fetch(`${URL}/posts`);
    const result = data.json();

    return result;
};
export default ServicePosts;
