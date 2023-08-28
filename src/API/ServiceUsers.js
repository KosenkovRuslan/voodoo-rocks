import { URL } from '../constants.js';

const ServiceUsers = () => {
    const data = fetch(`${URL}/users`)
        .then(response => response.json())
        .catch(error => {
            console.log('Error', error.message);
        })

    return data;
}
export default ServiceUsers;