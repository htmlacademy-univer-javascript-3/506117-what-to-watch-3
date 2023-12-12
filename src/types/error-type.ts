export type ErrorDetails = {
    property: string;
    value: string;
    messages: string[];
}

export type DetailMessageType = {
  type: string;
  message: string;
  details: ErrorDetails[]
}

