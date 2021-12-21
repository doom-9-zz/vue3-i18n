import { App } from "vue";
export interface I18nOptions {
    initial: string;
    translationConfiguration: Record<string, any>;
}
export interface I18n {
    install: (app: App, ...options: any[]) => any;
}
export declare const changeLocal: (value: string) => void;
declare const plugin: I18n;
export default plugin;
