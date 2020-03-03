import {
  ICommonProps,
  IAppearance
} from "@redwallsolutions/common-interfaces-ts";
import { MouseEvent, ReactNode } from "react";
import { Variant } from "@redwallsolutions/button-component-module/dist/components/interfaces";

export interface MenuOption {
  text: string;
  handler?: (event: MouseEvent<HTMLElement>) => void;
  icon?: ReactNode;
}

export interface Action extends MenuOption {
  variant?: Variant;
  appearance?: IAppearance;
}

export interface ICardStyled extends ICommonProps {
  shouldFitContainer?: boolean;
}

export interface ICard extends ICommonProps {
  isReady?: boolean;
  thumbnail?: ReactNode;
  headerText?: string;
  subHead?: string;
  menuOptions?: MenuOption[];
  media?: string;
  supportingText?: string;
  actions?: Action[];
  onClick?: (event:MouseEvent) => void;
}
