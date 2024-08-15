/***
 ** File: server\9-helper\src\helpers.ts
 ** Description: Helper functions to perform the common operations
 ** Date: 2024-08-16 01:46:01
 ** Version: 1.0.0 
 ** Author: Sunny Kumar
 ***/

export function firstLetterUppercase(str: string): string {
    const valueString = str.toLowerCase();
    return valueString
        .split(' ')
        .map(
            (value: string) =>
                `${value.charAt(0).toUpperCase()}${value
                    .slice(1)
                    .toLowerCase()}`
        )
        .join(' ');
}

export function lowerCase(str: string): string {
    return str.toLowerCase();
}

export const toUpperCase = (str: string): string => {
    return str ? str.toUpperCase() : str;
};

export function isEmail(email: string): boolean {
    const regexExp =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    return regexExp.test(email);
}

export function isDataURL(value: string): boolean {
    const dataUrlRegex =
        /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\\/?%\s]*)\s*$/i;
    return dataUrlRegex.test(value);
}

