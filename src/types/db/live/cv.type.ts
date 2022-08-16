import {DocumentData} from "firebase/firestore";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Profile } from "./Profile";
import { Skill } from "../Skill";

export type CvDoc = DocumentData & {
    profile?: Profile,
    skills?: Skill,
    education?: Education[],
    experience?: Experience[]
}

