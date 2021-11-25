<template>
<van-tabs v-model:active="active">
  <van-tab v-for="item in list" :key="item.id" :title="item.text"></van-tab>
</van-tabs>
</template>

<script setup lang="ts">
//在vue3声明一个变量可以用ref
import {ref} from '@vue/reactivity'
import axios from 'axios'

//TS 的接口用于标记数据格式
interface INvaItem {
    id: string
    text: string
}
const active = ref(0)

//频道数据 <INvaItem[]> 表示list数据为数组，数组的每一项需要符合这个格式
//TypeScript 好处：模板中使用list和item的时候，鼠标移入有类型提醒
const list = ref<INvaItem[]>([])


axios({
    url:'/navList',
    method:'get'
}).then(res => {
    console.log(res.data.result)
    list.value = res.data.result
})


</script>
