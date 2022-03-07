// @ts-check

import { getQueryParams } from "helpers/getQueryParams";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

/**
 * @template T
 * @param {Object} props
 * @param {string} props.queryParam
 * @param {T} [props.typeCurrentPage]
 * @returns {{
 * currentPage: T,
 * router: import("next/router").NextRouter
 * }}
 */
export const useChangeUrl = (props) => {
  const { queryParam } = props;

  const router = useRouter();

  /**@type {T} */
  const initCurrenPage = null;
  const [currentPage, setCurrentPage] = useState(initCurrenPage);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const currentPage = getQueryParams(queryParam);

    setCurrentPage(currentPage);
  }, [router.asPath]);

  return {
    currentPage,
    router,
  };
};
