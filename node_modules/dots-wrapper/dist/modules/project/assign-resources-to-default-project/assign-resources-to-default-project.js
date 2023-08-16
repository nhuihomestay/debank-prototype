"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignResourcesToDefaultProject = void 0;
const assignResourcesToDefaultProject = ({ httpClient, }) => ({ resources, }) => {
    const path = '/projects';
    const body = { resources };
    const url = `${path}/default/resources`;
    return httpClient.post(url, body);
};
exports.assignResourcesToDefaultProject = assignResourcesToDefaultProject;
//# sourceMappingURL=assign-resources-to-default-project.js.map