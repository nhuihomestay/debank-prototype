"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAppDetection = void 0;
const runAppDetection = ({ httpClient, }) => ({ commit_sha, component_type, git, github, }) => {
    const path = '/apps/detect';
    const body = {
        commit_sha,
        component_type,
        git,
        github,
    };
    const url = `${path}`;
    return httpClient.post(url, body);
};
exports.runAppDetection = runAppDetection;
//# sourceMappingURL=run-app-detection.js.map