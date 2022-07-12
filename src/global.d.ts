declare type Path = `/${string}`;

declare type Numb = `${number}`;

declare module "*.png" {
    const value: any;
    export default value;
}