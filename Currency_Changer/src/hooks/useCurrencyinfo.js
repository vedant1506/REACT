import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [currencyInfo, setCurrencyInfo] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    const base = String(currency || "").toLowerCase();

    if (!base) {
      setCurrencyInfo({});
      return () => controller.abort();
    }

    fetch(`https://latest.currency-api.pages.dev/v1/currencies/${base}.json`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (controller.signal.aborted) return;
        const payload =
          (data &&
            (data[base] ||
              data[base.toLowerCase()] ||
              data[Object.keys(data)[0]])) ||
          {};
        setCurrencyInfo(payload);
      })
      .catch((error) => {
        if (controller.signal.aborted) return;
        console.error("Error fetching currency data:", error);
        setCurrencyInfo({});
      });

    return () => controller.abort();
  }, [currency]);

  return currencyInfo;
}

export default useCurrencyInfo;
