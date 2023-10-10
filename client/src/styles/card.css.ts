import { style } from "@vanilla-extract/css";
import { colors, tokens } from "../configs/vanilla.css";

export const cardStyle = style({
  display: "flex",
  alignItems: "center",
  border: `${tokens.border.base} ${tokens.colors.blueGray}`,
  marginBottom: tokens.space.lg,

  selectors:{
    "&:hover": {  
        borderColor: tokens.colors.fireEngineRed,
      },
  }
});

export const cardDetailsStyle = style({
  flex: 2,
  padding: tokens.space.md,
  color: tokens.colors.black,
});

export const cardImgContainerStyle = style({
  flex: 3,
});

export const cardTitleStyle = style({
  selectors: {
    "&:hover": {
      textDecoration: "underline",
      color: tokens.colors.fireEngineRed,
    },
  },
});

export const cardImgStyle = style({
  width: tokens.size.full,
});

export const linkCardStyle = style({
  textDecoration: "none",
  cursor: "pointer",
});
