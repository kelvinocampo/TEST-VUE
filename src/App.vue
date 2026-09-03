<script setup lang="ts">

import { ref } from 'vue'

import Loader from './components/Loader.vue'

let cargando = ref<boolean>(true)
setTimeout(() => {
    cargando.value = false
}, 2000)

</script>

<template>
    <nav>
        <!-- Usamos 'to' en lugar de 'href' -->
        <router-link to="/">Inicio</router-link> |
        <router-link to="/test2">Test 2</router-link>
    </nav>

    <main>
        <div class="main">
            <Loader v-if="cargando" />
            <router-view v-if="!cargando" />
        </div>
        <!-- Aquí se pintará la vista correspondiente de la URL -->
    </main>
</template>

<style scoped>
.main {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>