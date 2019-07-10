export class Category {
    constructor(public name: string, public links: Link[]) {}
}

export class Link {
    constructor(public path: string, public name: string) {} // add a image that is put befor the link
}
