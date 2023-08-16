"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listInvoiceItems = void 0;
const listInvoiceItems = ({ httpClient, }) => ({ invoice_uuid, page = 1, per_page = 25, }) => {
    const path = '/customers/my/invoices';
    const query_params = { page, per_page };
    const url = `${path}/${invoice_uuid}`;
    return httpClient.get(url, { params: query_params });
};
exports.listInvoiceItems = listInvoiceItems;
//# sourceMappingURL=list-invoice-items.js.map