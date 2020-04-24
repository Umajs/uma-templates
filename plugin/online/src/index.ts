import { Ursa, TPlugin } from "@ursajs/core";

const plugin = (options: {}): TPlugin => {
    console.log(options);

    return {
        // TODO
    }
};

export default plugin(Ursa.pluginOptions('demo'));
