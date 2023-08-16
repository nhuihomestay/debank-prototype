"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApp = void 0;
const getApp = ({ httpClient, }) => ({ app_id, }) => {
    const path = '/apps';
    const url = `${path}/${app_id}`;
    return httpClient.get(url);
};
exports.getApp = getApp;
//# sourceMappingURL=get-app.js.map