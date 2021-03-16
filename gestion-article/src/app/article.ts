export class Article {
    public idArticle:number;
    public titreArticle:string;
    public dateArticle:Date;
    public contenuArticle: string;
constructor(idArticle:number,titreArticle:string,dateArticle:Date,contenuArticle:string){
    this.idArticle=idArticle;
    this.titreArticle=titreArticle;
    this.dateArticle=dateArticle;
    this.contenuArticle=contenuArticle;
}

}
