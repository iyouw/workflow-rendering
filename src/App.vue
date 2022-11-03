<template>
  <div class="designer" >
    <canvas id="designer" class="canvas" width="1920" height="1080"></canvas>
  </div>
  
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { Designer } from './core/designer';
import { ModelParser, type INodeMetaDict } from '@linker-design/work-flow';
import { ModelTransformer } from '@linker-design/work-flow';
import { ScheduleTransformer } from '@linker-design/work-flow';
import { RendererTransformer } from './core/renderer/renderer-transformer';
import { FabricRendererFactory } from './fabric/renderer/fabric-renderer-factory';
import { FabricPainter } from './fabric/painter/fabric-painter';

import { model, metaDict } from './data/index';

onMounted(()=>{
  const painter = new FabricPainter('designer', {
    backgroundColor: '#F1F1F1'
  });

  const rendererFactory = new FabricRendererFactory(painter);
  const rendererTransformer = new RendererTransformer(rendererFactory);

  const designer = new Designer(ModelParser.Default, ModelTransformer.Default, ScheduleTransformer.Default, rendererTransformer, rendererFactory);

  designer.init(metaDict as unknown as INodeMetaDict, model);

  const jModel = designer.getModel();
  console.log(jModel);

  const schedule = designer.getSchedule();
  console.log(schedule);

  designer.render();

  designer.on('select', evt=>{
    evt.target
  });

  console.log('render work flow');
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
