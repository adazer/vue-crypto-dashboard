<template>
  <div id="riskreport">
    <h1>Risk Report</h1>
    <button v-on:click="getRiskReport">Get Risk Report</button>
    <p>{{ reportName }}</p>
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
      reportName: 'No report'
    }
  },
  methods: {
    getRiskReport() {
        this.reportName = 'getting auth'
        const apiName = 'api12b26684';
        const path = '/report';
        const myInit = { 
            headers: {}, //Authorization: `Bearer ${(Auth.currentSession()).getIdToken().getJwtToken()}`,
        };
        this.reportName = 'invoking api'

        API
            .get(apiName, path, myInit)
            .then(response => {
                this.reportName = response
            })
            .catch(error => {
                console.log(error.response);
                this.reportName = error.response

            });
    }
  }
}


</script>