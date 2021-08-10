<template>
  <div class="about">
      <p>{{about}}</p>
      <p>{{message1}}</p>
  </div>
</template>

<script>
export default {
    name: 'about',
    props: ['about'],
    data() {
        return {
            message1: this.$store.state.message1,
        };
    },
    async asyncData({ store, route }) {
        store.state.message1 = 'about来自asyncData的数据';
    },
};
</script>

<style lang="less" scoped>
  .about{
    color: red;
  }
</style>
