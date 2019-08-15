<template>
  <div class="count-page">
    <h5>我是子组件</h5>
    <p>父组件的值：{{countNum}}</p>
    <div class="count">
      <el-button type="danger" icon="el-icon-minus" circle @click="countBtn(0)"></el-button>
      <span class="num">{{countVal}}</span>
      <el-button type="success" icon="el-icon-plus" circle @click="countBtn(1)"></el-button>
    </div>
  </div>

</template>

<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";

    @Component
    export default class Count extends Vue {
        @Prop()
        private countNum!: number;
        private countVal: number = 0;

        private countBtn(type: number) {
            if (type) {
                this.countVal += 1;
            } else {
                this.countVal -= 1;
            }
        }
    }
</script>

<style scoped lang="scss">
  .count-page {
    border: 1px solid #e38eff;
  }

  .count {
    width: 150px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    text-align: center;
    .num {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #999;
      margin: 0 10px;
    }
  }
</style>
