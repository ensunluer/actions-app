import { Header } from "../header";
import { List } from "../list";

export const Home = () => {
  const data: any[] = [];
  return (
    <>
      <Header />
      <List items={data} />
    </>
  );
};
