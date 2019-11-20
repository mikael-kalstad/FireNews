//@flow;

export default class Article {
    author: String;
    title: String;
    content: String;
    date: Date;
    summary: String;
    img: String = null;
    imgDescription: String = null;
    frontPage: Boolean;
    category: String;
}