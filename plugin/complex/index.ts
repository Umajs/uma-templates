import { Uma, TPlugin } from "@umajs/core";

export type Options = {};

export default (uma: Uma, options: Options = {}): TPlugin => {
    console.log(options);

    return {
        // TODO
    }
};
