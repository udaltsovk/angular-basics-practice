import { Config } from "stylelint";

const config: Config = {
  extends: ["stylelint-prettier/recommended", "stylelint-config-standard-less"],
  rules: {
    "selector-class-pattern": null,
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["ng-deep"],
      },
    ],
    "declaration-property-value-no-unknown": null,
    "no-descending-specificity": null,
    "selector-type-no-unknown": [
      true,
      {
        ignoreTypes: ["markdown"],
      },
    ],
  },
};

export default config;
