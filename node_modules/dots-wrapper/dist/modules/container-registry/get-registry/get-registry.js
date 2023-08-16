"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegistry = void 0;
const getRegistry = ({ httpClient, }) => () => {
    const path = '/registry';
    const url = `${path}`;
    return httpClient.get(url);
};
exports.getRegistry = getRegistry;
//# sourceMappingURL=get-registry.js.map