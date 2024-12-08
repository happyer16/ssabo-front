module.exports = {
  important: true,
  prefix: 'tw-',
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    spacing: {
      0: 0,
      1: '1px',
      2: '2px',
      4: '4px',
      6: '6px',
      8: '8px',
      10: '10px',
      11: '11px',
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      28: '28px',
      30: '30px',
      32: '32px',
      36: '36px',
      40: '40px',
      48: '48px',
      56: '56px',
      64: '64px',
      72: '72px',
      80: '80px',
      100: '100px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      white: '#ffffff',
      black: '#000000',
      ring: '#e4eaff',
      dim: 'rgba(73, 80, 87, 0.3)',
      gray: {
        100: '#f8f9fa',
        200: '#f1f3f5',
        300: '#dee2e6',
        400: '#adb5bd',
        500: '#868e96',
        600: '#495057',
        700: '#2a3037',
      },
      indigo: {
        100: '#f3f6ff',
        200: '#e5eaff',
        300: '#aebeff',
        400: '#8195ff',
        500: '#566fee',
        600: '#425ad5',
      },
      red: {
        100: '#fff5f5',
        200: '#ffe3e3',
        300: '#ffa8a8',
        400: '#ff6b6b',
        500: '#fa5252',
        600: '#f03e3e',
      },
      yellow: {
        100: '#fff9db',
        200: '#fff3bf',
        300: '#ffe066',
        400: '#ffd43b',
        500: '#fcc419',
        600: '#fab005',
      },
      green: {
        100: '#ebfbee',
        200: '#d3f9d8',
        300: '#8ce99a',
        400: '#69db7c',
        500: '#51cf66',
        600: '#40c057',
      },
    },
    fontSize: {
      11: '11px',
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      28: '28px',
      36: '36px',
    },
    fontWeight: {
      normal: 500,
      medium: 500,
      bold: 700,
      black: 900,
    },
    lineHeight: {
      100: '1',
      125: '1.25',
      150: '1.5',
    },
    boxShadow: {
      sm: '0 2px 8px rgba(73, 80, 87, 0.06)',
      lg: '0px 12px 24px rgba(73, 80, 87, 0.1)',
    },
    zIndex: {
      flat: 0,
      elevated: 10,
      menu: 20,
      header: 100,
      // 레거시 컴포넌트의 z-index가 1000~1099 이므로, 아래 영역들은 이것보다 높아야 한다.
      backdrop: 1100,
      modal: 1200,
      tooltip: 1300,
    },
    extend: {
      borderRadius: {
        none: 0,
        4: '4px',
        8: '8px',
        12: '12px',
        16: '16px',
        pill: '9999px',
        full: '100%',
      },
      ringWidth: {
        3: '3px',
      },
    },
  },
  plugins: [],
};
