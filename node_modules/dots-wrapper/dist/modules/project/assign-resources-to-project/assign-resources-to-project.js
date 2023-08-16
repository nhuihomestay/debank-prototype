"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignResourcesToProject = void 0;
const assignResourcesToProject = ({ httpClient, }) => ({ project_id, resources, }) => {
    const path = '/projects';
    const body = { resources };
    const url = `${path}/${project_id}/resources`;
    return httpClient.post(url, body);
};
exports.assignResourcesToProject = assignResourcesToProject;
//# sourceMappingURL=assign-resources-to-project.js.map