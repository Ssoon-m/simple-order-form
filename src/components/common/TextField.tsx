import React from "react";
import { cn, objectsToString } from "../../utils";

interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "normal" | "large";
  variant?: "outlined" | "standard";
  fullWidth?: boolean;
  error?: boolean | string;
  success?: boolean;
  icon?: React.ReactNode;
  color?: "black" | "white" | "gray";
  label?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      size,
      variant,
      fullWidth,
      icon,
      className,
      color,
      error,
      success,
      label,
      ...props
    },
    ref
  ) => {
    const { defaultProps, styles } = inputStyle;
    const { sizes, variants, base } = styles;

    // 1. set default props
    size = size ?? defaultProps.size;
    variant = variant ?? defaultProps.variant;
    fullWidth = fullWidth ?? defaultProps.fullWidth;
    color = color ?? defaultProps.color;

    // 2. set styles
    const inputSize = sizes[size] as any;
    const inputVariant = variants[variant] as any;
    const inputError = objectsToString(inputVariant.error.input);
    const inputErrorText = objectsToString(inputVariant.error.text);
    const inputSuccess = objectsToString(inputVariant.success.input);
    const inputLabel = objectsToString(inputVariant.colors.label[color]);
    const inputColor = objectsToString(inputVariant.colors.input[color]);

    // 3. class merge
    const containerClasses = cn(
      objectsToString(base.container),
      objectsToString(inputSize.container),
      {
        [objectsToString(base.fullWidth)]: fullWidth,
      }
    );

    const inputClasses = cn(
      objectsToString(base.input),
      objectsToString(inputSize.input),
      { [objectsToString(inputVariant.base.inputWithIcon)]: icon },
      { [inputColor]: !error && !success },
      { [inputError]: error },
      { [inputSuccess]: success },
      className
    );

    const labelClasses = cn(objectsToString(inputSize.label), inputLabel);

    const iconClasses = cn(
      objectsToString(base.icon),
      objectsToString(inputVariant.base.icon)
    );
    // objectsToString(inputSize.icon)

    return (
      <div>
        <label className={containerClasses}>
          {!!label && <div className={labelClasses}>{label}</div>}
          <input ref={ref} className={inputClasses} {...props}></input>
          {icon && <div className={iconClasses}>{icon}</div>}
        </label>
        {!!error && (
          <div>
            <span className={inputErrorText}>{error}</span>
          </div>
        )}
      </div>
    );
  }
);

export default TextField;

const inputOutlined = {
  base: {
    inputWithIcon: {
      pr: "!pr-[40px]",
    },
    icon: {
      top: "top-1/2",
      right: "right-3",
      transform: "-translate-y-1/2",
    },
  },
  colors: {
    input: {
      black: {
        borderColor: "border-black",
        borderColorFocused: "focus:border-black",
      },
      white: {
        color: "text-white",
        borderColor: "border-white",
        borderColorFocused: "focus:border-white",
      },
      gray: {
        borderColor: "border-[#CED4DA]",
        borderColorFocused: "focus:border-gray-500",
      },
    },
    label: {
      gray: {
        textColor: "text-black",
        fontWeight: "font-bold",
      },
      black: {},
      white: {},
    },
  },
  error: {
    input: {
      borderColor: "border-red-500",
      borderColorFocused: "focus:border-red-500",
    },
    text: {
      textSize: "text-s",
      textColor: "text-red-500",
    },
  },
  success: {
    input: {
      borderColor: "border-green-500",
      borderColorFocused: "focus:border-green-700",
    },
  },
} as const;

const inputStyle = {
  defaultProps: {
    size: "normal",
    variant: "outlined",
    fullWidth: true,
    color: "gray",
    className: "",
  },
  styles: {
    base: {
      container: {
        position: "relative",
        maxWidth: "max-w-[200px]",
      },
      input: {
        width: "w-full",
        height: "h-full",
        bg: "bg-transparent",
        fontWeight: "font-normal",
        transition: "transition-all",
        border: "border border-solid",
      },
      fullWidth: {
        display: "block",
        width: "w-full",
        maxWidth: "max-w-none",
      },
      icon: {
        position: "absolute",
      },
    },
    sizes: {
      normal: {
        container: {
          // height: "h-[44px]",
        },
        input: {
          textSize: "font-normal",
          py: "py-3",
          px: "px-3",
          borderRadius: "rounded-md",
        },
        label: {
          mb: "mb-1",
          textSize: "text-sm",
        },
        // icon: {
        //   width: "w-5",
        //   height: "h-5",
        // },
      },
      large: {},
    },
    variants: {
      outlined: inputOutlined,
      filled: {},
      standard: {},
    },
  },
} as const;
