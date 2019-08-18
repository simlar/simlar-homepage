import { ICta } from "@/interfaces/cta";
import { IImage } from "@/interfaces/image";

export interface IHeroStage {
  headline: string;
  img: IImage;
  downloads: ICta[];
}
