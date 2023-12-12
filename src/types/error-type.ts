export type ErrorDetails = {
    property: string;
    value: string;
    messages: string[];
}

export type DetailMessageType = {
  errorType: string;
  message: string;
  details: ErrorDetails[];
}

