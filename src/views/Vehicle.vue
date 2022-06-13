<template>
  <div class="row">
    <!-- Vehicles list from DB -->
    <select v-on:change="" id="vehicle_id">
      <option value="" selected>Выберите транспортное средство...</option>
      <option v-for="vehicle in vehicles" :value="vehicle.id">
        {{ vehicle.vin }}
      </option>
    </select>
  </div>
  
  <!-- Form for calculate "Customs Payment" (set style="display: block" when onChange #vehicle_id)  -->
  <div class="row pt-3" id="customs_payment_form_block" style="display: none">
    <div class="col-lg-4">
      <div class="card card-success">
        <div class="card-header">
          <div class="card-tools">
            <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
              <i class="fas fa-minus"></i>
            </button>
          </div>
        </div>

        <div class="card-body">
          <form @submit="postCalculate" method="post">
            <div class="form-group">
              <label for="fuel_type_id">Тип топлива</label>
              <select name="fuel_type_id" id="fuel_type_id" readonly="true" v-model="posts.fuel_type_id">
                <!-- set value and name from API when onChange #vehicle_id -->
                <option></option>
              </select>
            </div>

            <div class="form-group">
              <label for="engine_volume">Объём двигателя (см куб)</label>
              <!-- set value and name from API when onChange #vehicle_id -->
              <input type="number" step="0.01" min="1" name="engine_volume" id="engine_volume" v-model="posts.engine_volume" class="form-control" placeholder="Укажите объём двигателя...">
            </div>

            <div class="form-group">
              <label for="production_year">Год производства</label>
              <!-- set value and name from API when onChange #vehicle_id -->
              <input type="date" name="production_year" id="production_year" v-model="posts.production_year" class="form-control" placeholder="Укажите год производства...">
            </div>

            <div class="form-group">
              <label for="vehicle_price">Цена ТС</label>
              <!-- set value and name from API when onChange #vehicle_id -->
              <input type="number" step="0.01" min="1" name="vehicle_price" id="vehicle_price" v-model="posts.vehicle_price" class="form-control" placeholder="Укажите цену ТС...">
            </div>

            <div class="form-group">
              <label for="delivery_price">Цена доставки</label>
              <!-- set value and name from API when onChange #vehicle_id -->
              <select name="delivery_price" id="delivery_price" v-model="posts.delivery_price">
                <option value="" selected>Укажите цену доставки</option>
                <!-- set value and name from API when onChange #vehicle_id -->
              </select>
            </div>

            <div class="form-group">
              <button class="btn btn-primary btn-block" type="submit">Рассчитать</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-lg-8"></div>
  </div>

  <div class="row pt-3" id="customs_payment_alert_block" style="display: none">
    <div class="col-4-lg">
      <div class="row">
        <div class="col-6-lg">Акциз</div>
        <div class="col-6-lg" id="excise"></div>
      </div>

      <div class="row">
        <div class="col-6-lg">Ввозная пошлина</div>
        <div class="col-6-lg" id="import_duty"></div>
      </div>

      <div class="row">
        <div class="col-6-lg">НДС</div>
        <div class="col-6-lg" id="vat"></div>
      </div>
    </div>
    <div class="col-8-lg"></div>
  </div>


</template>

<script>
// Send form data for API "http://localhost:8876/api/customs_payment" --------
import axios from "axios"
import Vue from "vue"
import VueAxios from "vue-axios"

Vue.use(VueAxios, axios)
// ---------------------------------------------------------------------------

import {onMounted} from "vue";
import useVehicles from "../vehicles";

export default {
  name: 'Vehicle',

  data() {
    return {
      posts: {
        fuel_type_id: null,
        engine_volume: null,
        production_year: null,
        vehicle_price: null,
        delivery_price: null,
      }
    }
  },
  methods: {
    postCalculate(e)
    {
      this.axios.post("http://localhost:8876/api/customs_payment", this.posts)
      .then((result) => {
        // 1) set #customs_payment_alert_block style="display:block"
        // 2) show in div #excise result.excise
        // 3) show in div #import_duty result.import_duty
        // 4) show in div #vat result.vat
      })
    }
  },

  setup() {
    const { vehicles, getVehicles } = useVehicles()

    onMounted(() => {
      getVehicles()
    })

    return { vehicles }
  }
}
</script>

<style scoped>

</style>