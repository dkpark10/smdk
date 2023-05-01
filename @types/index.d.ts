declare namespace NodeJS {
  interface Process {
    /** running on server */
  }
  interface ProcessEnv {
    /** node environment */
    NEXT_PUBLIC_SOCKET_SERVER: string;
    NEXT_PUBLIC_BASE_URL: string;
  }
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.otf';
