export type AuthData = {
    login: string;
    password: string;
};

export type ErrorDetails = {
    property: string;
    value: string;
    messages: string[];
}

export type ReviewData = {
    comment: string;
    rating: number;
}
