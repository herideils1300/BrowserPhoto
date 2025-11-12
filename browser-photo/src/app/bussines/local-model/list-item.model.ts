class ListItem{
    title: string = "";
    desc: string = "";
    image?: Uint8Array = Uint8Array.from([]);

    public constructor (object: any){
        this.title = object.title;
        this.desc = object.desc;
        this.image = object.image;
    }

}