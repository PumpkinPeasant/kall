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
    },
    app: {
        head: {
            title: 'Steam Trade Desk',
            meta: [
                {
                    name: 'description',
                    content: 'Trade table for Steam in-game items'
                }
            ],
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
                }
            ]
        },
    }
})
