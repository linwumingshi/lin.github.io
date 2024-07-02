import {defineConfig} from 'vitepress'
import {shared} from './shared'
import {en} from './en'
import {zh} from './zh'

export default defineConfig({

    base: '/vitepress/',
    ...shared,
    locales: {
        root: { label: 'English', ...en },
        zh: { label: '简体中文', ...zh },
    },
    ignoreDeadLinks: true,
})