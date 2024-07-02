import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/lin.github.io/',
    locales: {
        root: {
            label: 'English',
            lang: 'en'
        },
        zh: {
            label: '中文简体',
            lang: 'zh-CN',
        }
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        outline: [2, 5],
        footer: {
            copyright: 'Copyright © 2024-present Smart-Doc',
        },

        search: {
            provider: 'local'
        },
    }

})
