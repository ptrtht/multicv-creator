import { GenericLevel } from "./GenericLevel";


export type Skill = {
    [key: string]: {
        level?: GenericLevel;
        highlight: boolean;
    }[];
};
