import { style } from "@vanilla-extract/css";
import { tokens } from "../configs/vanilla.css";

export const bodyStyle = style({
   fontFamily: tokens.font.body
});

export const containerStyle = style({
   maxWidth: "1200px",
   marginLeft: 'auto',
   marginRight: 'auto',
   marginTop: tokens.space.xxl,
});

export const sectionTitleStyle = style({
   fontSize: '44px',
    lineHeight: '44px',
    textTransform: "capitalize",
    borderBottom: `${tokens.border.base} ${tokens.colors.blueGray}`
})