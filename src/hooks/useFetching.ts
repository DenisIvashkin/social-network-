import React from "react";


export const useFetching = (callback: Function) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState('');

    const fetching = async (...args: unknown[]) => {
        try {
            setIsLoading(true);
            await callback(...args);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, error] as const
}