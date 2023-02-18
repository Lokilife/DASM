export enum Language {
  Russian,
  English,
}

export interface Page {
  title: string;
  url?: string;
  lang?: Language;
  pages?: Page[];
}
