export interface Book {
  id: number;
  title: string;
  authorFirstName: string;
  authorLastName: string;
  publicationDateUtc: string;
  isbn: string;
}

export interface BookView {
  id: number;
  title: string;
  author: string;
  publicationDateUtc: string;
  isbn: string;
}
