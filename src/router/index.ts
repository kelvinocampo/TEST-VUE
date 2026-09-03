import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/Home.vue'

// 1. Definimos las rutas usando el tipo estricto de TypeScript
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/test2',
        name: 'test2',
        // Carga perezosa (Lazy Loading): Solo descarga el código si el usuario entra aquí
        component: () => import('../views/Test2.vue')
    }
]

// 2. Creamos la instancia del router
const router = createRouter({
    history: createWebHistory(), // Usa el historial de navegación nativo del navegador
    routes
})

export default router
