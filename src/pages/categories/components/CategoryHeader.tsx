export default function CategoryHeader({
  image,
  showMore = false,
}: CategoryHeaderProps) {
  return (
    <div
      className="w-full h-40 bg-cover relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      {showMore && (
        <div className="absolute bottom-1 right-1 p-2">
          <button className="rounded-full bg-black px-4 py-1 text-white font-bold">
            Ver más
          </button>
        </div>
      )}
    </div>
  );
}

interface CategoryHeaderProps {
  image: string;
  showMore: boolean;
}
