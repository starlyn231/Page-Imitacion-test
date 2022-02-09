const COLORS = {
  primary: "#65b500 ",
  primaryOpacity: (color) => { return `rgba(237, 95, 48,${color || 0.50})` },
  secondary: "#0961ad",
  //secondaryOpacity: (color) => { return `rgba(32, 42, 93,${color || 0.50})` },
  tertiary: "£00bdff",
  tertiaryOpacity: (color) => { return `rgba(0, 99, 188,${color || 0.50})` },

  notificationSuccess: '#cee6d6',
  notificationWarning: '#ece6bb',
  notificationError: '#ff657a',

  //basics colors
  //#0961ad!importan
  red: "red",
  grayHover: '  #63696D',
  error: "#c95159",
  success: "#00a000",
  warning: "#ffff00",
  white: '#ffffff',
  whiteOpacity: 'rgba(255, 255, 255,0.65)',
  snow: '#f2f6ff',
  lighGreen: '#e0f0cc',
  black: '#231f20',
  gray: "#58595b",
  grayCard: '#666666',
  blueDark: '#25296a',
  grayDark: '#231f20',
  grayPlaceholder: '#A9A9AC',
  lightGray: "#DCDCDC",
  fieldGray: "#E6EAEE",
  gold: "#ffd700",
  yellow: "#FFFF00"
}

export default COLORS
