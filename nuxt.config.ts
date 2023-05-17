// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/apollo',
        '@invictus.codes/nuxt-vuetify'
    ],
    // @ts-ignore
    plugins: ['~/plugins/vuesax.ts'],
    apollo: {
        clients: {
            default: {
                httpEndpoint: 'https://rickandmortyapi.com/graphql'
            }
        },
    },
    vuetify: {
        vuetifyOptions: {
            // TODO: Настроить treeshaking
            // treeshaking: true,
            // styles: 'sass'
        },
    }
})
