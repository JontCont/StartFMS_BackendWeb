export {};

declare global {
  interface String {}
  interface StringConstructor {
    IsNullOrWhiteSpace(value: string): boolean;
    IsNullOrEmpty(value: string): boolean;
  }
}

String.IsNullOrWhiteSpace = (value: string | null): boolean => {
  return value === undefined || value === null || value.match(/^ *$/) !== null;
};
String.IsNullOrEmpty = (value: string | null): boolean => {
  return value === undefined || value === null || value.match(/^$/) !== null;
};
