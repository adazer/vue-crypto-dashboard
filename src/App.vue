<template>
  <amplify-authenticator>
      <div id="app">
          <LayoutPage></LayoutPage>
          <amplify-sign-out></amplify-sign-out>

      </div>
  </amplify-authenticator>
</template>
<script>
  import LayoutPage from './layout/LayoutPage.vue'
  export default {
    components: {
      LayoutPage
    }
  }
</script>
