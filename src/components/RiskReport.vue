<template>
  <div id="riskreport">
    <h1>Risk Report</h1>
    <button v-on:click="getRiskReport">Get Risk Report</button>
    <p>{{ status }}</p>
    <div v-for="item in items" :key="item">
      <h3>{{ item }}</h3>
    </div>
  </div>
</template>

<script>

import { API } from 'aws-amplify';
//import { Auth } from 'aws-amplify';

export default {
  name: 'RiskReport',
  async created() {
    this.getRiskReport();
  },
  data() {
    return {
      status: 'No report',
      items: []
    }
  },
  methods: {
    getRiskReport() {
        this.status = 'getting auth'
        const apiName = 'api12b26684';
        const path = '/report';
        const myInit = { 
            headers: {}, //Authorization: `Bearer ${(Auth.currentSession()).getIdToken().getJwtToken()}`,
        };
        this.status = 'invoking api'

        API
            .get(apiName, path, myInit)
            .then(response => {
                this.status = 'received'
                this.items = response
                console.log(response)
            })
            .catch(error => {
                console.log(error.response);
                this.status = error.response

            });
    }
  }
}


</script>