export interface ISound{
    id:string,
    name:string,
    author:string,
    image:string,
    sound:string,
    genre:string,
    premium:string,
    soundpremium:string
    }
export class Sound{
    constructor(
    public id:string="",
    public name:string="",
    public author:string="",
    public image:string="",
    public sound:string="",
    public genre:string='',
    public premium:string='',
    public soundpremium:string=''
    )
    {}
    }