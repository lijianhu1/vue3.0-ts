<template>
  <div class="test-wrap">
    <div class="test1">
      <el-input v-model="text"></el-input>
      <p>input文字为：{{text}}</p>
    </div>
    <div class="test2">
      <h5>我是父组件</h5>
      <div class="parent-box">
        <span>父组件输入框：</span>
        <el-input v-model.number="parentCount"></el-input>
      </div>
      <Count :countNum="parentCount"></Count>
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import Count from '../components/Count.vue';
  @Component({
      components: {
          Count,
      },
  })
  export default class Test extends Vue {
      private text: string = '';
      private parentCount: number = 0;
  }
</script>

<style scoped lang="scss">
  .test-wrap{
    >div{
      padding: 30px 0;
      margin:20px 0;
      border: 1px solid #999;
    }
  }
  .test1{
    width: 300px;
    margin: 20px auto;
  }
  .parent-box{
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    span{
      display: inline-block;
      width: 150px;
    }
    .el-input{
      width: 150px;
    }
  }
</style>
