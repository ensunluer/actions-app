import { Header } from "../header";
import { List } from "../list";

export type Data = {
  id: number;
  title: string;
  description: string;
  point: number;
  image: string;
};

type ListData = {
  items: Data[];
};

export const Home = ({ items }: ListData) => {
  return (
    <>
      <Header />
      <List items={items} />
    </>
  );
};
