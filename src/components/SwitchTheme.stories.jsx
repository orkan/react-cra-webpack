import SwitchTheme from "./SwitchTheme";

export default {
  component: SwitchTheme,
  title: "SwitchTheme 01",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {},
};

export const Light = {
  args: {
    isDark: false,
  },
};

export const Dark = {
  args: {
    isDark: true,
  },
};

export const onClickLogger = {
  args: {
    isDark: true,
    onClick: (...args) => console.log("onClick, checked:", args[0]),
  },
};
