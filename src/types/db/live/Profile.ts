import { ScoialButton } from "../../socialButton.type";


export type Profile = {
    socials?: ScoialButton[];
    name?: string;
    title?: string;
    picUrl?: string;
    description?: string;
    data?: Record<string, string>[];
};
