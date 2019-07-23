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
      src: url('./statics/iconfont/iconfont.eot?t=1563853924725'); /* IE9 */
      src: url('./statics/iconfont/iconfont.eot?t=1563853924725#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAARgAAsAAAAACJgAAAQTAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqEJIN2ATYCJAMUCwwABCAFhG0HWhuUB8gOJSGRwABgYABgPHwtce/v7l0ue6ld1er7+KgIma6wCAMKhMJiJDEWYbpiGJ8httkBS1wHXyWLLmDrRz0Q+/E+OvqPe6fN88Dms285zbG0qAswmkABjTVoAaVhgRQYN4xdXMZuAtWKjrDrnKIq4KDQBgXiRRJ54BBTKiWE0EnanJlFfAa2uvQRPwOAT+7n4y+ICAeSJtNG3txla0DaD+/XvYkB/weot1GA1Z8ezDwydgGFeJdrfEH4wV2EKv3Oxjmg6iTph/ezmGfFr3v//4/MXZG46kJ9/PGSQrQ04RDEn4cKP7xNhMyPGITgRzFC4m9v9o0RNra4opSvAPgPNOlqn4KkX7XrphX+3q5+7u6u5K1TFalX1NROCyHn+FXzuxWjAahRX8lR57CBHDfQvXoSs2UFGLBSMfowhj2Pzj+ZvPfq1StJXl57rpCjCk5duzYwcvP166WjrpRdGcRcvKoYHZ7AdGCv32IvXeM4keYGDiTZaVNA1ZSGmdHSvtmSUwE+dbMCRV9u9urtW1sxO692NAK2v36du3aNrbh6lblypaoRY0hKj/DLM+jZz3ZAyL3YNusidPmvyrymSyll8AyVlHLd5neKFR2NozHbC6W5HSs5NygK0xKeNHLotL/374BWH1uFgItvU4ftuLubNuO921rmrr213dAuSYmtq6NRP+1opzWin+cMiqrUmiitscrLyUnv1Sl5+/bdRmyjyc5Lo6tMrgD+On2x4PtHR9VieHwoAW7hv5an//P7Izfn357dZVtQb18/hc/mgBf5kbULv+u6+g8vzvEuyQb95xP79/cehm/dig8DxveLNM2E0R5bjuJj8KHz9/cL3PQwqX9/n6HE1k3ECEzfczEf0n2kx6bD+HhsyPwD/QNBDwBv//Mr4ZJe5emEL2lgriH6hlflAUSHP+E7/h3KGNfkmvTVoS/ge/1SDXS8DSygPvN1ikis986qWVRkjqZqiphvMkVT4zCilKSKirdtnXCvH/F07XRCZzqEZMAyZJ1VdMHvQqN3Cq3OGVQ7cuf3JskIUQaxbSiAMGY9JCO+QTbmLLrg70JjxltojQUB1W14rthbD4nMlCGPoIZS9aQktdkkGBpEepkVUOxq4OUoxyWyULZKHipcGZaM5EITlPsYY+0mRiAkUIJsNlI5YD9oMJgpi2zWQTVSahGyJNC0kPcgpdpsBKQrMoiHQBoUlZ4oEjUzE8Euj5Cp91eARF0Z8OSSghItC5JZSc1TwimF1UDnCk21Cs6lvVU3oggIIuB+ApmZESUH6iGDHjSjWPK76UBqiJK2hd8iAY1KCXWFyvHFxmvcAJV2QRMpcpRoopUueEcjL5okQYKy0zFc0kmthWq9ZHLTSXwvXmqyarvyPSRTkxkAAA==') format('woff2'),
      url('./statics/iconfont/iconfont.woff?t=1563853924725') format('woff'),
      url('./statics/iconfont/iconfont.ttf?t=1563853924725') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url('./statics/iconfont/iconfont.svg?t=1563853924725#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
      font-family: "iconfont" !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
`;
