/** Global definitions for developement **/

// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}

declare module "*.json" {
    const value: any;
    export default value;
}

// for redux devtools extension
declare interface Window {
  devToolsExtension?(): (args?: any) => any;
}

declare const SOCKET_SERVER_URL;
