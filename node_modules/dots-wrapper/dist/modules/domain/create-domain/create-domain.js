"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDomain = void 0;
const createDomain = ({ httpClient, }) => ({ ip_address, name, }) => {
    const path = '/domains';
    const body = {
        ip_address,
        name,
    };
    const url = `${path}`;
    return httpClient.post(url, body);
};
exports.createDomain = createDomain;
//# sourceMappingURL=create-domain.js.map