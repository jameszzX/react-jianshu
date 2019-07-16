import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    @font-face {font-family: "iconfont";
      src: url('./statics/iconfont.eot?t=1563272694574'); /* IE9 */
      src: url('./statics/iconfont.eot?t=1563272694574#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPYAAsAAAAAB/QAAAOJAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDMIMJATYCJAMQCwoABCAFhG0HRxv6BhEVnAXJfh7YblMOYGnYw2BCqDSVYmzPfQ8C/jtzHpJud09ASX3VuYJCEiAgaHHOWTIiwgzl7Mmj7/qkPMhyCoD/OWa6tAnkB5pjdfNob4CjaB1QdAmd3gHiLcNrXQoHvRsCMAmTQpQpV6UOBhoySACiS8f2LTEyUnRDosBAYK+YqRETsWHIUfIsMCH4e/GGrAyQ2BRkZI12ZdtQ4rnv86pqsHMwTTwEtOnUgDwPFJACNIgOldpWqMibQmGa7TX5gIGBhKka8j2v6nRi+lG4BuUy9B9PgrBD4l0AyAM+Bc99OTXh5QMxAnhVIQ4J8EH4BsQMA7ZCcCFerZFIw/C1An3dA9zNei51zM5Ww0bTw8y5AQ1a7rHGgCnMg+bo88JRv74jeHmRultXMniVNeaIEJ3HVDxVdN+1a1eL+PjsvWqOrnT6+nVH9pYbN6qPvlrjak7dS9esMckJdZPr3bhd7/L1+vXbp9d3OMx606dSx6dN3Zkx3g9YejrIr/Hs4Pb+9ees2bEttu6uaykH25W/lFDmUls353S43qlY9bqyVKuOxW7oP8V69zlWIF3YSqZ1T6zX0bWpVblEoafN6vc5E+j7Jyj2U2wYl94VH77z3p707rJfQo95627v6JJYpBDauHF6n4Edxvit+6S/KJeTp3aHbhEdutYJU8qV7JtadMeOPeyUZt3sPm061c7Jw79qfg95YEyeRkKKkdXwKPqwd+CLB6O2VLwzp+f2kH7+AZbflqCXFbMbLfrh34EjqpbzrVaWHgA4neqgCgiv1Qzl73eohmrAj+yFrfb2ms3di3wzrAfJu1X7+Hdsdjo03Xj8DVpn2m+jdczQFoPItDaYnGrrNBmpQUjAxAR+VhC83J+C79s5HgQGvglIchEKCoMYpMamgA2LPGDHoDiYJCs/38JbLxRC5waSDEMg8LABJG4cAIWHc0iNvQc2/LwDOx4pMKknvFe0COJyRWlGJfiC6Q9OLzMxhRRh4hXNOypOMwL8E3l3DuibLh+44Iw8xZj9YwYRAuIlwRnthzEusPLiUUtjRdaxbanqS41eUlYozagEX2D6A6eXmbzcUhR+/4rmHRU3pDUpn8i7ax70Gl0H5IU7d0q7lXv2jxmIECBeEjgjNUbqXcBa3c2jloYd4F5HLc5GXbnN8vz0hssAE9lYJ4USWtiQq7yrMrMjh1zdQodaW9TBzVkGAAAA') format('woff2'),
      url('./statics/iconfont.woff?t=1563272694574') format('woff'),
      url('./statics/iconfont.ttf?t=1563272694574') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url('./statics/iconfont.svg?t=1563272694574#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
      font-family: "iconfont" !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
`;
