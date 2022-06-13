import { ref } from "vue";
import axios from "axios";

export default function loginForApi() {
    const token_api = ref({})

    /**
     *  Token
     * @returns {Promise<void>}
     */
    const getToken = async () => {
        axios.post('http://localhost:8876/api/login',
            {
                auth: {
                    email: "denis.larichev97@gmail.com",
                    password: 12345678
                },
                headers: {
                    "User-agent": "Request-Promise"
                }
            }
        )
        .then(response => {
            token_api.value = response.data.data;
        })
    }

    return { token_api, getToken }
}