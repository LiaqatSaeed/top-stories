import { style } from "@vanilla-extract/css";
import { tokens } from "../configs/vanilla.css";

export const radioTabsStyle = style({
  display: "flex",
  gap: tokens.space.xs,
});

export const tabLabelStyle = style({
  cursor: "pointer",
  padding: `${tokens.space.xs} ${tokens.space.sm}`,
  border: `${tokens.border.base} ${tokens.colors.lightGray}`,
  borderTopLeftRadius: tokens.radii.xs,
  borderTopRightRadius: tokens.radii.xs,
  textTransform: "capitalize"
});

export const tabInputStyle = style({
  position: "absolute",
  opacity: 0,
});

export const selectedTabStyle = style({
  backgroundColor: tokens.colors.fireEngineRed,
  color: tokens.colors.white,
});
