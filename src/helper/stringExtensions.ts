export {}


declare global {
    interface String {
        IsNullOrWhiteSpace(): boolean;
        IsNullOrEmpty(): boolean;
    }
}


String.prototype!.IsNullOrWhiteSpace = function (): boolean {
    return this === null || this.match(/^ *$/) !== null;
};

String.prototype!.IsNullOrEmpty = function (): boolean {
    return this === null || this.match(/^$/) !== null;
};
