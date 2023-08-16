"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateApp = void 0;
const updateApp = ({ httpClient, }) => ({ app_id, spec, }) => {
    const path = '/apps';
    const body = { spec };
    const url = `${path}/${app_id}`;
    return httpClient.put(url, body);
};
exports.updateApp = updateApp;
//# sourceMappingURL=update-app.js.map