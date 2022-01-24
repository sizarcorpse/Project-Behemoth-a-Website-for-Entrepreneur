export default function MuiTooltip(theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: theme.typography.h5.fontSize,
          color: theme.palette.primary.yellow,
          backgroundColor: theme.palette.primary.black,
          borderRadius: 0,
        },
      },
    },
  };
}
