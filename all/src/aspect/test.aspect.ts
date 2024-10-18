import { IProceedJoinPoint } from '@umajs/core';

/* eslint-disable */
export const method = async ({ proceed }:IProceedJoinPoint) => {
    console.log('test: this is around before');
    const result = await proceed();
    console.log('test: this is around after');

    return result;
}