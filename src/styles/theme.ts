// the styling file will pull from this file
export const theme = {
    fonts: {
        body: '"Inter", sans-serif', 
        subheading: '"Inconsolata", sans-serif',
        serif: '"EB Garamond", serif', // heading
    },
    colors: {
        // layout
        background: '#101010',
        outline: '#5f5f5f40',
        cardBorder: '#363637',
        // accents
        primary: '#6360ff',
        secondary: '#8785ff',
        // text
        bodyTextColor: '#ffffffa7',
        subheadingColor: 'rgba(255, 255, 255, 0.395)',
        headingColor: '#ffffff',
        textGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(153, 153, 153, 1) 100%)',
    },
    spacing: {
        // text: '4px',
        // list: '14px',
        // container: '28px',
    },
    typography: {
        title: '48px',
        heading: '26px',
        subheading: '22px',
        paragraph: '14px',
    }
} as const;

// Type for accessing theme values
export type Theme = typeof theme;