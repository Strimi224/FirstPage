export class Category {
    constructor(public name: String, public links: Link[]) {}
}

export class Link {
    constructor(public path: String, public name: String) {} // add a image that is put befor the link
}