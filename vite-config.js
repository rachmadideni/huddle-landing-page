import { defineConfig } from 'vite'
import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss";

export default defineConfig({
    base: '/huddle-landing-page/',
    plugins: [
        pluginPurgeCss(),
    ],
})