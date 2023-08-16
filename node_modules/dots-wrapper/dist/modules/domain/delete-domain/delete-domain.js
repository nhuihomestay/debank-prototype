"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDomain = void 0;
const deleteDomain = ({ httpClient, }) => ({ name, }) => {
    const path = '/domains';
    const url = `${path}/${name}`;
    return httpClient.delete(url);
};
exports.deleteDomain = deleteDomain;
//# sourceMappingURL=delete-domain.js.map