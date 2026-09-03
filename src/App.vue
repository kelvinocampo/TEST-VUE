<script setup lang="ts">

import { ref } from 'vue'

import Loader from './components/Loader.vue'
import Component from './components/Component.vue'
import ForComponent from './components/ForComponent.vue'

let cargando = ref<boolean>(true)

setTimeout(() => {
    cargando.value = false
}, 2000)

</script>

<template>
    <div class="main">
        <Loader v-if="cargando" />
        <div v-if="!cargando">
            <Component />
            <ForComponent />
        </div>
    </div>
</template>

<style scoped>
.main{
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>