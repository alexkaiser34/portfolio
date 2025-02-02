import axios from "axios";
const URL = 'https://c9qvh48v3h.execute-api.us-east-2.amazonaws.com/prod'

export interface ProjectType {
    id: string;
    alignment: string;
    category: string;
    contributions: string[];
    image: string;
    LongDescription: string;
    responsibilities: string[];
    role: string;
    shortDescription: string;
    timeline: string;
    title: string;
    company?: string;
}


const responseCacheMap: Map<string, ProjectType[]> = new Map();


async function getProjects() : Promise<ProjectType[]> {

    return new Promise<ProjectType[]>((resolve, reject) => {
        axios.get(URL)
        .then((response) => {
            if (response.data && (response.data.length > 0)){
                try {
                    const projects: ProjectType[] = JSON.parse(JSON.stringify(response.data));
                    resolve(projects);
                }
                catch {
                    resolve([]);
                }
            }
            else {
                resolve([]);
            }

        })
        .catch((err) => reject(err));
    })
}

export async function getAllProjects() : Promise<ProjectType[]> {
    return new Promise<ProjectType[]>((resolve, reject) => {
        if(!responseCacheMap.has('all')) {
            getProjects()
            .then((data) => {
                responseCacheMap.set('all', data);
                resolve(data);
            })
            .catch((err) => console.log(err))
        }
        else {
            const data = responseCacheMap.get('all');
            if (data !== undefined)
            {
                resolve(data);
            }
            else {
                resolve([]);
            }
        }
    })
}