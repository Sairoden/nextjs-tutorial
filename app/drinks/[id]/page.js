// NEXT
import Link from "next/link";
import Image from "next/image";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async id => {
  const res = await fetch(`${url}${id}`);

  if (!res.ok) throw new Error("Couldn't fetch a single drink");
  return await res.json();
};

export default async function SingleDrinkPage({ params }) {
  const data = await getSingleDrink(params.id);

  const { strDrink: title, strDrinkThumb: img } = data?.drinks[0];

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        Back to drinks
      </Link>

      <Image
        width={300}
        height={300}
        src={img}
        alt={title}
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
        priority
      />
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
}
