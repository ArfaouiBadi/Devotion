export interface Book {
  BookID: number;
  Title: string;
  Book_Author: string;
  Book_Publisher: string;
  Book_Publish_Date: Date;
  Book_Language: string;
  Book_Category: string;
  Book_Cover: string;
  Book_Description: string;
  Book_Price: number;
  Book_Rating: number;
  Book_Stock: number;
  Book_Pages: number;
  Book_Review: Array<string>;
 
}
