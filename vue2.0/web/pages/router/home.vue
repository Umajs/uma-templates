<template>
  <div class="home">
      <p>{{home}}</p>
      <p>{{message}}</p>
  </div>
</template>

<script>
export default {
    name: 'home',
    props: ['home'],
    data() {
        return {
            message: this.$store.state.message,
        };
    },
    async asyncData({ store, route }) {
        store.state.message = 'home来自asyncData的数据';
    },
};
</script>
<style lang="less" scoped>
  .home{
    color: red;
  }
</style>
