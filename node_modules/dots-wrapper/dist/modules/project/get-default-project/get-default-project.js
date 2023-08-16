"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultProject = void 0;
const getDefaultProject = ({ httpClient, }) => () => {
    const path = '/projects';
    const url = `${path}/default`;
    return httpClient.get(url);
};
exports.getDefaultProject = getDefaultProject;
//# sourceMappingURL=get-default-project.js.map