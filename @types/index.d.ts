declare namespace NodeJS {
  interface Process {
  }
  interface ProcessEnv {
    /** @description 노드 환경변수 */
    NEXT_PUBLIC_SOCKET_SERVER: string;
    NEXT_PUBLIC_BASE_URL: string;
  }
}

declare module 'common-type' {
  export type MonthEN =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

  export type MonthKR =
  | "1월"
  | "2월"
  | "3월"
  | "4월"
  | "5월"
  | "6월"
  | "7월"
  | "8월"
  | "9월"
  | "10월"
  | "11월"
  | "12월"

  export type Month = {
    [key in MonthEN]: MonthKR;
  }

  export type AfterNoon = "AM" | "PM";
}

declare module 'chat-type' {
  export interface ChatData {
    content: string;
    fullDate: string;
    isSender: boolean;
    milliSeconds: string;
  }
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.otf';
