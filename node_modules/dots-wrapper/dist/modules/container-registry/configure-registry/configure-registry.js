"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureRegistry = void 0;
const configureRegistry = ({ httpClient, }) => ({ name, }) => {
    const path = '/registry';
    const body = { name };
    const url = `${path}`;
    return httpClient.post(url, body);
};
exports.configureRegistry = configureRegistry;
//# sourceMappingURL=configure-registry.js.map