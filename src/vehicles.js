import { ref } from "vue";
import axios from "axios";

export default function useVehicles() {
    const vehicles = ref({})

    /**
     *  Get vehicle models data
     *
     * @returns {Promise<void>}
     */
    const getVehicles = async () => {
        axios.get('http://localhost:8876/api/vehicles')
            .then(response => {
                vehicles.value = response.data.data;
            })
    }

    return { vehicles, getVehicles }
}