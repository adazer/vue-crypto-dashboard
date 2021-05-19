<template>
  <div id="keymgmt">
    <h1>API Keys</h1>
    <input type="text" v-model="provider" placeholder="Exchange / Provider Name">
    <input type="text" v-model="apiKey" placeholder="Public Key">
    <input type="text" v-model="secretKey" placeholder="Secret Key">
    <p>{{ status }}</p>
    <button v-on:click="createAPIKey">Save</button>
    <div v-for="item in apikeys" :key="item.id">
      <h3>{{ item.provider }}</h3>
      <p>{{ item.apiKey }}</p>
      <p>{{ item.secretKey }}</p>
    </div>
  </div>
</template>

<script>
import { API } from 'aws-amplify';
import { createBinanceKey } from '../graphql/mutations';
import { listBinanceKeys } from '../graphql/queries';

export default {
  name: 'APIKeys',
  async created() {
    console.log('apikey component creation started')
    this.listAPIKeys();
    console.log('apikey component creation done')

  },
  data() {
    return {
      provider: '',
      apiKey: '',
      secretKey: '',
      apikeys: []
    }
  },
  methods: {
    async createAPIKey() {
        const { provider, apiKey, secretKey } = this;
        if (!provider || !apiKey || !secretKey) return;
        const apikey = { provider, apiKey, secretKey };
        this.apikeys = [...this.apikeys, apikey];
        await API.graphql({
            query: createBinanceKey,
            variables: {input: apikey},
        });
        this.provider = '';
        this.apiKey = '';
        this.secretKey = '';
    },
    async listAPIKeys() {
        console.log('getting data from graphql')
        const apikeys = await API.graphql({
            query: listBinanceKeys
        });
        this.apikeys = apikeys.data.listBinanceKeys.items;
        console.log('got data from graphql')

    }
  }
}
</script>