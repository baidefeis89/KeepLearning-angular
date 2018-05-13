export interface Icourses {
    _id?: string,
    title: string,
    creator?: any,
    description: string,
    topics?: Itopic[],
    image?: string
}

export interface Itopic {
    _id?: string,
    title: string,
    description: string,
    paragraphs: Iparagraph[],
    messages?: Imessage[]
}

export interface Iparagraph {
    _id?: string,
    title: string,
    video: string,
    messages?: Imessage[],
    visits?: number
}

export interface Imessage {
    _id?: string,
    subject: string,
    text: string,
    creator: any,
    responses: Imessage[]
}
