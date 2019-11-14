const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.ts("./src/js/index.tsx", "./dist/index.js")
    .sass("./src/scss/index.scss", "./dist/index.css")
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.config.js')],
    })
    .copy("./src/index.html", "./dist/index.html");


mix.browserSync({
    proxy: '',
    server: 'dist/',
    files: ['dist/**/**']
});