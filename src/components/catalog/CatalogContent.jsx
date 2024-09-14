"use client";
import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import Link from "next/link";

import styles from "@/styles/catalog.module.css";
import Filter from "@/components/catalog/Filter";
import Search from "@/components/Search/Search";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { CartContext } from "@/providers/CartProvider";
import { MAX_PRICE, methodsToLoad } from "./constant";
import GetPriceForm from "../Form/GetPriceForm";
import Popup from "../popup/Popup";
import { useTranslation } from "react-i18next";
import NoSearchResult from "./NoSearchResult";
import Spinner from "../Spinner/Spinner";
import PagePagination from "../pagination/PagePagination";

const CatalogContent = ({ categories }) => {
  const locale = useParams().locale;

  const { t } = useTranslation();

  const [addLoading, setAddLoading] = useState(false);
  const [getLoading, setGetLoading] = useState(true);

  const router = useRouter();
  const searchParams = useSearchParams();

  const filterWindowRef = useRef(null);
  const filterButtonRef = useRef(null);

  const [cart, addToCart] = useContext(CartContext);

  const [priceFilter, setPriceFilter] = useState({
    min: searchParams.get("price_min") || "",
    max: searchParams.get("price_max") || "",
  });

  const page = parseInt(searchParams.get("page")) || 1;
  const [isNextPage, setIsNextPage] = useState(false);
  const [pageCount, setPageCount] = useState(undefined);

  const [products, setProducts] = useState([]);

  const [isFiltersOpen, setIsFiltersOpen] = useState(
    searchParams.getAll("sub").length > 0 ? false : true
  );

  const [getPriceFormProduct, setGetPriceFormProduct] = useState(null);

  const [methodToLoadProducts, setMethodToLoadProducts] = useState(
    methodsToLoad.UPDATE
  );

  const changePage = async (method, page) => {
    setAddLoading(true);
    setMethodToLoadProducts(method);
    const urlSearchParams = new URLSearchParams(searchParams.toString());
    urlSearchParams.set("page", page);

    if (method === methodsToLoad.UPDATE) {
      router.push(`/catalog?${urlSearchParams.toString()}`, { scroll: true });
    } else if (method === methodsToLoad.APPEND) {
      router.replace(`/catalog?${urlSearchParams.toString()}`, {
        scroll: false,
      });
    } else {
      console.log("method is undefined", method);
    }
  };

  const getProducts = async (abortController) => {
    const url = new URL(
      process.env.BACK_URL +
        `/${locale}/api/products/?` +
        searchParams.toString()
    );

    const response = await fetch(url, { signal: abortController.signal });

    if (!response.ok) {
      throw new Error(response.status + " запрос товаров не удался");
    }

    const data = await response.json();

    if (data.next) {
      setIsNextPage(true);
    } else {
      setIsNextPage(false);
    }

    setPageCount(data["page_count"]);

    setProducts((prev) => {
      if (methodToLoadProducts === methodsToLoad.UPDATE) {
        return data.results;
      } else if (methodToLoadProducts == methodsToLoad.APPEND) {
        return prev.concat(data.results);
      }
    });
    setAddLoading(false);
    setGetLoading(false);
    setMethodToLoadProducts(methodsToLoad.UPDATE);
  };

  useEffect(() => {
    const page = searchParams.get("page");
    if (page == 1 || !page || (page > 1 && products.length === 0)) {
      setGetLoading(true);
    }

    const abortController = new AbortController();

    getProducts(abortController);
    setPriceFilter({
      min: searchParams.get("price_min") || "",
      max: searchParams.get("price_max") || "",
    });

    return () => {
      abortController.abort();
    };
  }, [searchParams]);

  useEffect(() => {
    const handler = (e) => {
      if (
        !filterWindowRef.current.contains(e.target) &&
        !filterButtonRef.current.contains(e.target)
      ) {
        setIsFiltersOpen(false);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handlePriceChange = (val, type) => {
    if (val < 0 || val > MAX_PRICE) return;

    setPriceFilter((prev) => {
      const newState = { ...prev };
      if (type === "filter-price-min") {
        newState.min = val;
      }
      if (type === "filter-price-max") {
        newState.max = val;
      }

      return newState;
    });
  };

  const handleReset = () => {
    setPriceFilter({
      min: "",
      max: "",
    });
    router.replace("/catalog", { scroll: false });
  };

  const handleCatChange = (slug) => {
    setIsFiltersOpen(false);
    router.replace(`/catalog?sub=${slug}`, { scroll: false });
  };

  return (
    <div className={styles["catalog__content"]}>
      <div
        className={`${styles["catalog__filters-popup"]} ${
          isFiltersOpen && styles["open"]
        }`}
        ref={filterWindowRef}
      >
        <button
          className={styles["catalog__filters-popup-close"]}
          onClick={() => setIsFiltersOpen(false)}
        >
          {t("catalog:filters")}
          <img src="/svgs/close-icon.svg" alt="закрыть" />
        </button>
        <Filter
          categories={categories}
          searchParams={searchParams}
          priceFilter={{ get: priceFilter, onChange: handlePriceChange }}
          handleCatChange={handleCatChange}
          reset={handleReset}
        />
      </div>
      <Filter
        categories={categories}
        searchParams={searchParams}
        priceFilter={{ get: priceFilter, onChange: handlePriceChange }}
        handleCatChange={handleCatChange}
        reset={handleReset}
      />
      <aside className={styles["catalog__serach"]}>
        <Search />
      </aside>
      <div
        className={styles["catalog__filters-sort-buttons"]}
        ref={filterButtonRef}
      >
        <button
          className={styles["catalog__filters-toggle"]}
          onClick={() => setIsFiltersOpen((prev) => !prev)}
        >
          <img src="/svgs/filters-toggle-icon.svg" />
          {t("catalog:filters")}
        </button>
      </div>
      <div className={styles["catalog__products"]}>
        <main>
          {getLoading ? (
            <Spinner />
          ) : products.length <= 0 ? (
            <NoSearchResult />
          ) : (
            products.map((p) => (
              <div className={styles["products__card"]}>
                <div className={styles["card__cover"]}>
                  <Link href={`/product/${p.slug}/`}>
                    <span className={styles["card__presence"]}>
                      {p.is_present
                        ? t("catalog:presence.on")
                        : t("catalog:presence.off")}
                    </span>
                    <div className={styles["card__image"]}>
                      {p.img_urls.length > 0 ? (
                        <img
                          src={p.img_urls[0].img_url}
                          height={214}
                          width={200}
                          alt="фото товара"
                        />
                      ) : (
                        <img src={"/images/noimage.jpg"} />
                      )}
                    </div>
                  </Link>
                </div>
                <div className={styles["card__body"]}>
                  <div className={styles["card__name"]}>
                    <Link href={`/product/${p.slug}/`}>{p.name}</Link>
                  </div>
                  <div className={styles["card__caracteristics"]}>
                    <ul>
                      {p.charachteristics &&
                        p.charachteristics
                          .map((c) =>
                            c.translations[locale] ? (
                              <li key={c.id}>
                                <span className={styles["caracteristics__key"]}>
                                  {c.translations[locale].key}
                                </span>
                                <span className={styles["caracteristics__val"]}>
                                  {c.translations[locale].value}
                                </span>
                              </li>
                            ) : null
                          )
                          .slice(0, 3)}
                    </ul>
                  </div>
                  {p.current_price ? (
                    <div className={styles["card__order"]}>
                      <div className={styles["order__price"]}>
                        <div className={styles["price__key"]}>
                          <span>{p.current_price && t("catalog:price")}</span>
                        </div>
                        <div className={styles["price__val"]}>
                          <span>
                            {p.current_price && p.current_price + " ₽"}
                          </span>
                        </div>
                      </div>
                      <div className={styles["order__cart-button"]}>
                        {!(p.id in cart) ? (
                          <button onClick={() => addToCart(p.id)}>
                            {t("catalog:to_cart")}
                            <img
                              src="/svgs/catalog-cart-icon.svg"
                              alt="иконка"
                            />
                          </button>
                        ) : (
                          <button>
                            {t("catalog:in_cart")}{" "}
                            <img src="/svgs/cart-check-icon.svg" alt="иконка" />
                          </button>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className={styles["card__order"]}>
                      <div className={styles["order__get-price-button"]}>
                        <button onClick={() => setGetPriceFormProduct(p)}>
                          {t("catalog:get_price")}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </main>
        {products.length > 0 && !getLoading && (
          <div className={styles["catalog__pagination"]}>
            {isNextPage && (
              <button
                className={styles["catalog__show-more"]}
                onClick={() => changePage(methodsToLoad.APPEND, page + 1)}
                disabled={addLoading}
              >
                {addLoading ? <Spinner size={30} /> : t("catalog:show_more")}
              </button>
            )}
            <PagePagination
              page={page}
              pageCount={pageCount}
              handleClick={(page) => changePage(methodsToLoad.UPDATE, page)}
              disabled={addLoading}
            />
          </div>
        )}
      </div>
      {getPriceFormProduct !== null && (
        <Popup close={() => setGetPriceFormProduct(null)}>
          <GetPriceForm product={getPriceFormProduct} />
        </Popup>
      )}
    </div>
  );
};

export default CatalogContent;
