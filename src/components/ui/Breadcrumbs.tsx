import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const pathMap = {
  products: "Products",
} as const;

type PathMapKey = keyof typeof pathMap;

function Breadcrumbs() {
  const location = useLocation();
  const pathName = location.pathname;

  const pathNames = pathName.split("/").filter((x) => x);

  const pathMap = {
    products: "Products",
  };

  const getBreadcrumbName = (value: string): string => {
    // Check if the value exists in pathMap
    if (value in pathMap) {
      return pathMap[value as PathMapKey];
    }
    return decodeURIComponent(value);
  };
  return (
    <nav className="p-2 my-3">
      <ul className="flex flex-row items-center space-x-2 text-[16px] font-normal">
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <IoIosArrowForward />
        {pathNames.map((value, index) => {
          const to = `/${pathNames.slice(0, index + 1).join("/")}`;

          return (
            <Fragment key={to}>
              <li>
                <Link to={to}>{getBreadcrumbName(value)}</Link>
              </li>
              {index !== pathNames.length - 1 && <IoIosArrowForward />}
            </Fragment>
          );
        })}
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
