"use client";
import CategoryList from "./CategoryList";
import PriceFilter from "./PriceFilter";
import ResetFilter from "./ResetFilter";

const Filter = ({ setIsFiltersOpen }) => {
  return (
    <>
      <CategoryList setIsFiltersOpen={setIsFiltersOpen} />
      <PriceFilter />
      <ResetFilter />
    </>
  );
};

export default Filter;
