export interface Footer {
  columns: FooterColumn[];
}
export interface FooterColumn {
  headline: string;
  links: FooterColumnItem[];
}
export interface FooterColumnItem {
  id: string;
}
