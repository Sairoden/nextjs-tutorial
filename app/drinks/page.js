// COMPONENTS
import { DrinkList } from "../../components";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  const res = await fetch(url);

  if (!res.ok) throw new Error("Failed to fetch drinks");

  const data = await res.json();

  return data.drinks;
};

export default async function DrinksPage() {
  const data = await fetchDrinks();

  return (
    <h1 className="text-7xl">
      DrinksPage
      <DrinkList drinks={data} />
    </h1>
  );
}
