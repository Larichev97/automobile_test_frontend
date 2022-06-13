<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
<!--        <router-link to="/">Vehicle</router-link>-->
<!--        <router-view></router-view>-->
        <Vehicle></Vehicle>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted} from "vue";

import Vehicle from "./views/Vehicle.vue";
import loginForApi from "./login";

export default {
  name: 'App',
  components: {Vehicle},

  setup() {
    const { token_api, getToken } = loginForApi()

    onMounted(() => {
      getToken()
    })

    return { token_api }
  }
}
</script>

<style>

</style>
