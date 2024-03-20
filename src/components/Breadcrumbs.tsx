import { Link } from "react-router-dom";

const Breadcrumbs = ({ pathnames }: { pathnames: string[] }) => {
  return (
    <nav aria-label="breadcrumb" className="shadow-sm">
      <ul className="breadcrumb flex justify-start gap-1 items-center h-14 rtl:ltr  site_container">
        <li className="breadcrumb-item">
          <Link to="">Home /</Link>
        </li>
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(1, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li
              key={index}
              className={`breadcrumb-item${isLast ? " active" : ""} ${
                index === 0 && "hidden"
              }`}
            >
              {isLast ? (
                // If it's the last item, display the text without a link
                pathname?.replace(/-/g, " ")
              ) : (
                // If it's not the last item, display a link
                <Link to={routeTo}>{pathname?.replace(/-/g, " ")} / </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
