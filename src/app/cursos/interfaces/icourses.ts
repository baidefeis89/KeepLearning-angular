export interface Icourses {
    id: number,
    title: string,
    creator: any,
    description: string,
    topics?: Itopic[]
}

export interface Itopic {
    id: number,
    title: string,
    description: string,
    paragraphs: string,
    messages: Imessage[]
}

export interface Imessage {
    id: number,
    subject: string,
    text: string,
    creator: any,
    responses: Imessage[]
}
