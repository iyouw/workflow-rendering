<template>
  <div class="designer" >
    <canvas id="designer" class="canvas" width="1920" height="1080"></canvas>
  </div>
  
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { FabricPainter } from './core/painter/fabric-painter';

onMounted(()=>{
  const painter = new FabricPainter('designer');

  painter.button('开始',undefined, undefined, 60, 60, 30);

  painter.button('识别是否有人',undefined, 120, 200, 48, 24);

  painter.button('请将左侧节点或算法拖入框中',undefined, 120 + 48 + 30, 200, 48, 0, 'dashed');

  painter.select('条件判断1', undefined, 120 + 48 + 30 + 48 + 30, 200, 48);
  painter.warn(undefined, 120 + 48 + 30 + 48 + 30+48);

  painter.select('条件判断2', undefined, 1070, 200, 48);

  painter.render();
})
</script>

<style lang="css" scoped>
.designer{
  width: 1920px;
  height: 1080px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
