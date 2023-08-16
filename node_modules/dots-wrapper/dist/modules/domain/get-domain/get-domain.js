"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDomain = void 0;
const getDomain = ({ httpClient, }) => ({ name, }) => {
    const path = '/domains';
    const url = `${path}/${name}`;
    return httpClient.get(url);
};
exports.getDomain = getDomain;
//# sourceMappingURL=get-domain.js.map