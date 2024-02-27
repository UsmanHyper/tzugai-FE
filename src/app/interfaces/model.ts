export interface user {
    first_name: string,
    last_name: string,
    type: string,
    image: string;
    user_image: string;
}

export interface Menu {
    id?: number;
    name: string;
    icon?: string;
    route: string;
    permissions?: any;
    is_parent?: boolean;
    sub_menu?: Menu[];
   
}