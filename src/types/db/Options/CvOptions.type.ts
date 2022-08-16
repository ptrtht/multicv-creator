import { DocumentData } from "firebase/firestore";
import { Skill } from "../Skill";
import { EducationOptions } from "./EducationOptions";
import { ExperienceOptions } from "./ExperienceOptions";
import { ProfileOptions } from "./ProfileOptions";



export type CvOptionsDoc = DocumentData & {
    profile?: ProfileOptions,
    skills?: Skill,
    education?: EducationOptions[],
    experience?: ExperienceOptions[]
}




export const createEmptyCvOptions = (): CvOptionsDoc => {
    return {
        profile: {
            name: [], // Done
            title: [], // Done
            socials: [], // Done
            picUrl: [], // Done
            description: [],
            data: []
        },
        skills: {},
        education: [],
        experience: []

    } as CvOptionsDoc
} 