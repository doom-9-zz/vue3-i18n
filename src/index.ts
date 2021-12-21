import { App, ref } from "vue";

export interface I18nOptions {
  initial: string;
  translationConfiguration: Record<string, any>;
}

export interface I18n {
  install: (app: App, ...options: any[]) => any;
}

const local = ref<string | undefined>(undefined);

const getOptionsValue = (
  target: string,
  options: Record<string, any> | undefined
): string => {
  if (options === undefined) return "";
  if (local.value === undefined) return "";
  const targetSplitArray = target.split(".");
  targetSplitArray.unshift(local.value);
  let current = options;
  while (targetSplitArray.length > 0) {
    current = current[targetSplitArray[0]];
    if (current === undefined) {
      return "";
    }
    targetSplitArray.shift();
  }
  if (typeof current === "string") {
    return current;
  }
  return "";
};

export const changeLocal = (value: string): void => {
  local.value = value;
};

const plugin: I18n = {
  install: (app: App, ...options: any[]) => {
    if (options.length === 0) return "";
    if (typeof options[0] !== "object") return "";
    local.value = options[0].initial;
    app.config.globalProperties.$t = (target: string): string => {
      return getOptionsValue(target, options[0].translationConfiguration);
    };
  },
};

export default plugin;
