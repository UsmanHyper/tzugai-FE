import { environment } from "src/environments/environment";
export class SubTableConfig {
    private static writeCondition(row: any) {
        // const us: any = localStorage.getItem('userData');
        const user = true;
        return user;
    }

    public static config = {
        title: 'Subscribers List',
        slug: `${environment.baseUrlData}get_all?`,
    

        addBtnText: '',
        showHeader: false,
        showSubHeader: false,
        showCSVTool: false,
        search: false,
        sortingOutside: true,
        paginationOutside: false,
        doApiCall: false,
        showRowActions: false,

        acColumnWidth: '110px',
        rowActions: [
            { icon: 'ri-pencil-line', type: 'icon', tooltip: 'Edit', action: 'onEdit', condition: SubTableConfig.writeCondition },
            { icon: 'ri-delete-bin-2-line', type: 'icon', tooltip: 'Delete', action: 'onDelete', btnColor: 'btn-danger', condition: SubTableConfig.writeCondition },
        ],

        columns: [
            { name: 'date', title: 'date', sortable: false, sortingOutside: false, format: 'date' },
            { name: 'email', title: 'email', sortable: true, sortingOutside: true, }
        ]
    }
}

function userStatus(v: any, r?: any, c?: any): any {
    if (r.status === "COMPLETED") {
        return `<span  class="active-status fw-600"  >COMPLETED</span>`;
    } else {
        return `<span class="active-danger fw-600"  >CANCELED</span>`;
    }

}
export const USER_STATUS: any = (v: any, r?: any, c?: any) => userStatus(v, r, c);