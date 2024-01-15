import { defineConfig } from 'vite'
import htmlPurge from 'vite-plugin-html-purgecss'

export default defineConfig({
    base: '/huddle-landing-page/',
    plugins: [
        htmlPurge(),
    ],
})