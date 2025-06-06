import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import path from 'path';

// https://astro.build/config
export default defineConfig({
    site: 'https://docs.everyday.agency/',

    integrations: [
        starlight({
            title: 'everyday.agency Documentation',
            social: {
                github: 'https://github.com/withastro/starlight',
            },
            sidebar: [
                {
                    label: 'Getting Started',
                    autogenerate: { directory: 'getting-started' },
                },
                {
                    label: 'Configuration',
                    autogenerate: { directory: 'configuration' },
                },
                {
                    label: 'Layout',
                    autogenerate: { directory: 'layout' },
                },
                {
                    label: 'Utilities',
                    autogenerate: { directory: 'utilities' },
                },
                {
                    label: 'Components',
                    autogenerate: { directory: 'components' },
                },
                {
                    label: 'WordPress',
                    autogenerate: { directory: 'wordpress' },
                },
            ],
        }),
    ],

    vite: {
        resolve: {
            alias: {
                '@components': path.resolve('./src/astro-components'),
                '@scss': path.resolve('./src/scss'),
                '@js': path.resolve('./src/js'),
            },
        },
    },
});
