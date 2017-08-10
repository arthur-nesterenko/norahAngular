

export class GeneratedImages {
    public id:string;
    public files:Array<any>;
    public title:string;
    public description:string;
    private active:boolean=false;

    constructor(id:string,title:string,description:string, files:Array<any>)
        { 

                this.id=id;
                this.title=title;
                this.files=files;
                this.description=description;
                




                  }
            public isActive(){

                return this.active;

            }

            public setActive(active:boolean=true){
                this.active=active;
            }




}



