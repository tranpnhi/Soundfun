export interface IBanner{
    id:string,
    image:string,
    }
export class Banner{
    constructor(
    public id:string="",
    public image:string="",
    )
    {}
    }