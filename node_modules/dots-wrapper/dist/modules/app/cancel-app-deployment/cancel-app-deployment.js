"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppDeployment = void 0;
const cancelAppDeployment = ({ httpClient, }) => ({ app_id, deployment_id, }) => {
    const path = '/apps';
    const url = `${path}/${app_id}/deployments/${deployment_id}/cancel`;
    return httpClient.post(url);
};
exports.cancelAppDeployment = cancelAppDeployment;
//# sourceMappingURL=cancel-app-deployment.js.map