import { cn } from "@/lib/utils";

type RatingComponentProps = {
  defaultRating: number;
  className?: string;
  small?: boolean;
};
function RatingComponent({
  defaultRating,
  className,
  small,
}: RatingComponentProps) {
  return (
    <div
      className={cn("w-full flex justify-start gap-3 items-center ", className)}
    >
      <div className="  flex items-center gap-0.5 rtl:ltr">
        {[...Array(5)].map((_, index) => (
          <img
            className={`${small&&"w-4"}`}
            key={index}
            src={
              defaultRating > index
                ? `/images/star_filled.svg`
                : `/images/star.svg`
            }
            alt={`star-icon ${index}`}
          />
        ))}
      </div>
    </div>
  );
}

export default RatingComponent;
