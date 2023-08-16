"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBalance = void 0;
const getBalance = ({ httpClient, }) => () => {
    const path = '/customers/my/balance';
    const url = `${path}`;
    return httpClient.get(url);
};
exports.getBalance = getBalance;
//# sourceMappingURL=get-balance.js.map