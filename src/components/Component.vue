<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Component',

  // 1. DATA: Aquí defines el estado/variables del componente
  data() {
    return {
      usuario: 'Carlos' as string,
      contador: 0 as number,
      estaActivo: true as boolean
    }
  },

  // 2. METHODS: Aquí defines las funciones que modifican el data o ejecutan lógica
  methods: {
    incrementar(): void {
      // TypeScript sabe exactamente que 'this.contador' es un número
      this.contador++
    },

    cambiarNombre(): void {
      this.usuario = this.usuario == "Carlos" ? "Andres" : "Carlos"
    }
  }
})
</script>

<template>
  <div class="contenedor">
    <!-- 3. TEMPLATE: Aquí renderizas los datos y conectas los métodos -->
    <h1>Hola, {{ usuario }}</h1>
    <p>Contador actual: <strong>{{ contador }}</strong></p>

    <!-- Escucha de eventos con @click -->
    <button @click="incrementar">Incrementar</button>
    <button @click="cambiarNombre">Cambiar Nombre</button>
  </div>
</template>

<style scoped>
.contenedor {
  padding: 20px;
  font-family: sans-serif;
}
</style>
