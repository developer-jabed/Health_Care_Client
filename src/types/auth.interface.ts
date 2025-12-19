export interface ChangePasswordPayload {
    oldPassword: string;
    newPassword: string;
}

// types for server response
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ApiResponse<T = any> {
    success: boolean;
    message: string;
    data?: T;
}