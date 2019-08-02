'use strict'

const black = '#1A202C'
const white = '#A0AEC0'
const red = '#f56565'
const green = '#68D391'
const yellow = '#FAF089'
const blue = '#63B3ED'
const magenta = '#B794F4'
const cyan = '#81E6D9'
const lightBlack = '#718096'

const colors = {
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white,
  lightBlack,
  lightRed: red,
  lightGreen: green,
  lightYellow: yellow,
  lightBlue: blue,
  lightMagenta: magenta,
  lightCyan: cyan,
  lightWhite: white
}

module.exports.decorateConfig = config => {
  const backgroundColor = black
  const foregroundColor = white
  const cursorColor = config.cursorColor || '#68d391'
  const borderColor = '#2d3748'
  const tabText = lightBlack
  const tabTextActive = white
  
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .terminal a {
        color: ${cyan};
      }
    `,
    css: `
      ${config.css || ''}
      .tabs_title {
  			display: none !important;
  		}
      .tab_textInner {
        color: ${tabText};
        font-weight: 500;
      }
      .tab_tab.tab_active .tab_textInner {
        color: ${tabTextActive};
      }
      .splitpane_divider {
        background-color: ${borderColor} !important;
      }
    `
  })
}