const calcRem = (size) => `${size / 16}rem`;

const fontSizes = {
  xxs: calcRem(10),
  xs: calcRem(12),
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  xxxxl: calcRem(28),
  LogoSize: calcRem(40),
  titleS: calcRem(50),
  titleBase: calcRem(60),
  titleXl: calcRem(70),
  titleLg: calcRem(90),
};

const paddings = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
  new: calcRem(70),
};

const margins = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const interval = {
  base: calcRem(50),
  lg: calcRem(100),
  xl: calcRem(150),
  xxl: calcRem(200),
};

const verticalInterval = {
  base: `${calcRem(10)} 0 ${calcRem(10)} 0`,
};

const deviceSizes = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1280px",
};

const colors = {
  White: "hsl(0, 0%, 100%)",
  Gray_010: "#F0F0F0",
  Gray_020: "#CECECE",
  Gray_030: "#AEAEB2",
  Gray_040: "#8E8E93",
  Gray_050: "#636366",
  Gray_060: "#48484A",
  Gray_070: "#363639",
  Gray_080: "#2C2C2E",
  Gray_090: "#1C1C1E",
  Orange_040: "#FF6737",
  Yellow_040: "#FFE053",
  Green_040: "#386941",
};

const device = {
  mobile: `only screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `only screen and (max-width: ${deviceSizes.laptop})`,
  laptopL: `only screen and (max-width: ${deviceSizes.laptopL})`,
};
const radius = {
  small: calcRem(10),
  base: calcRem(15),
  lg: calcRem(25),
};
const theme = {
  fontSizes,
  colors,
  deviceSizes,
  device,
  paddings,
  margins,
  interval,
  verticalInterval,
  radius,
};

export default theme;
