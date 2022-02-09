// @ts-check
import { Delay, useInverseDebounce } from "@skapxd/debounce";
import { useEffect, useState } from "react";

export class AxisInfiniteScroll {
  static vertical = "vertical";
  static horizontal = "horizontal";
}

/**
 * @param {Object} props
 * @param {any[]} [props.iterable]
 * @param {string} [props.className]
 * @param {number} [props.pixelsBeforeCallOnNext]
 * @param {AxisInfiniteScroll} [props.axis]
 * @param {(value: boolean) => Promise<void>} [props.onNext]
 * @param {(index: number) => JSX.Element} [props.itemBuilder]
 * @param {import("react").HTMLAttributes<HTMLButtonElement> } [props.style]
 */
export function InfinityScroll(props) {
  const {
    className = "",
    itemBuilder = () => <></>,
    pixelsBeforeCallOnNext = 500,
    axis = AxisInfiniteScroll.horizontal,
    onNext = async () =>
      console.log("default function onNext param of InfiniteScroll"),
    iterable = [],
  } = props;

  const [scroll, setScroll] = useState({
    currentScroll: 0,
    maxScroll: 0,
  });

  const [isLoading, setIsLoading] = useState(false);

  const inverseDebounce = useInverseDebounce({
    fn: async (value) => onNext && (await onNext(value)),
  });

  useEffect(() => {
    // En caso de que [isLoading] sea false, no se ejecutara lo que sigue
    if (!isLoading) return;

    // En caso de que [currentScroll] sea igual a [maxScroll] significa que se esta renderizando por primera vez
    if (scroll.currentScroll === scroll.maxScroll) return;

    inverseDebounce(false);
  }, [scroll]);

  return (
    <div
      className={className}
      style={{
        ...{
          height: "100%",
          width: "100%",

          display: "flex",
          flexDirection:
            axis === AxisInfiniteScroll.vertical ? "column" : "row",
        },
      }}
      onScroll={(e) => {
        const currentScroll =
          e.currentTarget.scrollWidth -
          e.currentTarget.scrollLeft -
          pixelsBeforeCallOnNext;
        const maxScroll = e.currentTarget.clientWidth;

        if (currentScroll <= maxScroll) {
          setIsLoading(true);
          setScroll({
            currentScroll,
            maxScroll,
          });
        }
      }}
    >
      {iterable.map((e, i) => itemBuilder(i))}
    </div>
  );
}
