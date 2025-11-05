class ListItem{
    title: string = "";
    desc: string = "";
    image?: Uint8Array = Uint8Array.from([]);

    public constructor(title: string, desc:string, image: Uint8Array){
        this.title = title;
        this.desc = desc;
        this.image = image;
    }

    public mapFrom(object: any){
        this.title = object.title;
        this.desc = object.desc;
        this.image = object.image;
    }
}