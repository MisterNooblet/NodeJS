import axios from "axios";
import request from "request";
import got from "got";


const fetchAndLog = async () => {
    try {
        //AXIOS
        const axiosFetch = await axios.get('https://randomuser.me/api/')
        console.log('axios', axiosFetch.data);
        //REQUEST
        const requestFetch = request('https://randomuser.me/api/', (error, response, body) => {
            if (error) {
                console.log(error);
            } else {
                console.log('request', JSON.parse(body));
            }
        })
        //GOT
        const gotFetch = await got('https://randomuser.me/api/').json()
        console.log('got', gotFetch);

    } catch (error) {
        console.log(error);
    }
}

fetchAndLog()