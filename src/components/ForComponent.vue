<script lang="ts">
import { defineComponent } from 'vue'
interface Usuario {
    id: number,
    name: string;
}
export default defineComponent({
    name: 'ForComponent',

    data() {
        return {
            usuarios: [{ id: 0, name: 'Carlos' }] as Usuario[],
            nuevo_usuario: "" as string,
        }
    },

    methods: {
        agregar(usuario: string): void {
            this.usuarios.push({id: this.usuarios.length - 1, name: usuario})
            this.nuevo_usuario = ""
        },
        eliminar(id: number) {
            this.usuarios.splice(id, 1)
        }
    }
})
</script>

<template>
    <div class="contenedor">
        <ul>
            <li v-for="usuario in usuarios" :key="usuario.id">{{ usuario.name }}</li>
            <li v-if="nuevo_usuario">{{ nuevo_usuario }}</li>
        </ul>
        <input v-model="nuevo_usuario">
        <button @click="agregar(nuevo_usuario)">Agregar</button>
    </div>

</template>

<style scoped>
.contenedor {
    padding: 20px;
    font-family: sans-serif;
}
</style>
