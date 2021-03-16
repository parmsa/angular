export class Article {
    private idArticle: number;
    private titreArticle: string;
    private dateArticle: string;
    private contenueArticle: string;

    constructor(idArticle: number, titreArticle: string, dateArticle: string, contenueArticle: string) {
        this.idArticle=idArticle;
        this.titreArticle=titreArticle;
        this.dateArticle=dateArticle;
        this.contenueArticle=contenueArticle;
    }


}
