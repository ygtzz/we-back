<template>
  <div class="dashboard-editor-container">
    <h1>demo页面</h1>
  </div>
</template>

<script>
  export default {
    name: 'demo',
    data() {
      return {
      };
    },
    computed: {
    }
  };
</script>

<style rel="stylesheet/scss" lang="sass" scoped>
  .dashboard-editor-container {
    margin: 30px;
    .btn-group {
      margin-bottom: 60px;
    }
    .box-card-header {
      position: relative;
      height: 160px;
    }
    .panThumb {
      z-index: 100;
      height: 150px;
      width: 150px;
      position: absolute;
      left: 0px;
      right: 0px;
      margin: auto;
    }
    .display_name{
      font-size: 30px;
      display: block;
    }
    .info-item{
      display: inline-block;
      margin-top: 10px;
      font-size: 14px;
      &:last-of-type{
        margin-left: 15px;
      }
    }
  }
</style>
