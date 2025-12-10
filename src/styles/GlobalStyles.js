import { createGlobalStyle } from "styled-components";
import "@fontsource/akaya-telivigala"
import "@fontsource/sora"




const GlobalStyles = createGlobalStyle`

${'' /* *{
    outline: 1px solid red !important;
} */}

html{
    scroll-behavior: smooth;
}
*,*::before,*::after{
    margin: 0;
    padding: 0;
}

body{
    font-family: 'Sora', sans-serif;
    overflow-x: hidden;
    
    // Default base font size for smaller screens (e.g., 16px)
    
    @media (min-width: 64em) {
        // Increase the base font size for desktops (e.g., 18px)
        font-size: 1.125em; 
    }
}

h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
a{
    color: inherit;
    text-decoration:none;
}
`

export default GlobalStyles;