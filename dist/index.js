import { ref } from 'vue';

const local = ref(undefined);
const getOptionsValue = (target, options) => {
    if (options === undefined)
        return "";
    if (local.value === undefined)
        return "";
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
const changeLocal = (value) => {
    local.value = value;
};
const plugin = {
    install: (app, ...options) => {
        if (options.length === 0)
            return "";
        if (typeof options[0] !== "object")
            return "";
        local.value = options[0].initial;
        app.config.globalProperties.$t = (target) => {
            return getOptionsValue(target, options[0].translationConfiguration);
        };
    },
};

export { changeLocal, plugin as default };
