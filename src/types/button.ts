import * as React from "react";
import { type ButtonProps as ButtonVariantsProps } from "@/lib/button-variants";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariantsProps {
  asChild?: boolean;
}
