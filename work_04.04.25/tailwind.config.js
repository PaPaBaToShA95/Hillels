import typography from '@tailwindcss/typography'

export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            animation: {
                bounceOnce: 'bounce 1s ease-in-out 1',
            },
        },
    },
    plugins: [typography],
}
