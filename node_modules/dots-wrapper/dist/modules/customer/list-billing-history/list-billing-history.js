"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listBillingHistory = void 0;
const listBillingHistory = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/customers/my/billing_history';
    const query_params = { page, per_page };
    const url = `${path}`;
    return httpClient.get(url, { params: query_params });
};
exports.listBillingHistory = listBillingHistory;
//# sourceMappingURL=list-billing-history.js.map