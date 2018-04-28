export interface Icourses {
    id: string,
    title: string,
    creator: any,
    description: string,
    topics?: Itopic[]
}

export interface Itopic {
    id: string,
    title: string,
    description: string,
    paragraphs: string,
    messages: Imessage[]
}

export interface Iparagraph {
    id: string,
    title: string,
    video: string,
    messages: Imessage[]
}

export interface Imessage {
    id: string,
    subject: string,
    text: string,
    creator: any,
    responses: Imessage[]
}
