import { createGlobalStyle } from "styled-components";
import MontserratExtraBold from "../fonts/Montserrat-ExtraBold.ttf";
import MontserratBold from "../fonts/Montserrat-Bold.ttf";
import MontserratSemiBold from "../fonts/Montserrat-SemiBold.ttf";
import MontserratMedium from "../fonts/Montserrat-Medium.ttf";
import MontserratRegular from "../fonts/Montserrat-Regular.ttf";
import MontserratLight from "../fonts/Montserrat-Light.ttf";
import { devices } from "../devices";

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after{
        box-sizing:border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body, input, textarea, button,select{
        font-family: ${({ theme }) => theme.font.family.montserrat};
    }

    button{
        background: none;
        border: none;
        cursor: pointer;
        outline: none;
    }

    @font-face{
        font-family: "Montserrat";
        src: url(${MontserratExtraBold}) format('truetype');
        src: url(${MontserratBold}) format('truetype');
        src: url(${MontserratSemiBold}) format('truetype');
        src: url(${MontserratMedium}) format('truetype');
        src: url(${MontserratRegular}) format('truetype');
        src: url(${MontserratLight}) format('truetype');
    }

    html{
        font-size:62.5%;

        @media ${devices.mobileM}{

        }

        @media ${devices.mobileL}{
            
        }

        @media ${devices.tablet}{
            font-size:75%;
        }

        @media ${devices.tabletVer}{
            font-size:95%;
        }

        @media ${devices.laptop}{
            font-size:45%;
        }

        @media ${devices.laptopL}{
            font-size:62.5%;
        }
    }

    body{
        margin:0;
        padding:0;
        font-size:1.6rem;
    }

    
`;

export default GlobalStyle;
