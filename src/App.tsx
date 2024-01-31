import json from "./data/etsy.json";
import { Listing } from "./components/Listing";
import './App.css';

export interface JsonDataStructure {
  listing_id: number;
  url: string;
  MainImage: {
    url_570xN: string;
  };
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}

export default function Home() {
  const data: JsonDataStructure[] = json as JsonDataStructure[];

  return <Listing items={data} />;
}
