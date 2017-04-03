declare interface Window {
    ioc: any;
}

interface StringConstructor {
    format(...params: Array<any>): string;
    isNullOrWhiteSpace(value: string): boolean;
    empty: string;
    firstCharToLower(str: string): string;
    toPascalCase(str: string): string;
}
declare interface Array<T> {
    firstOrDefault(callback: any): any;
    removeItem(item: any): Array<any>;
    any(callback: any): boolean;
}