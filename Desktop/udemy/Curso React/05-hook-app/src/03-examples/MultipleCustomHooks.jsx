import { useFetch, useCounter } from "../hooks";
import { IsLoadingQuote, Quote } from "./components";

export const MultipleCustomHooks = () => {
  const { increment, counter } = useCounter(1);
  const { data, isLoading } = useFetch(
    ` https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h3>Breaking bad quotes</h3>
      <hr />
      {isLoading ? <IsLoadingQuote /> : <Quote author={author} quote={quote} />}
      <button
        disabled={isLoading}
        className="btn btn-primary"
        onClick={() => increment()}
      >
        Next quote
      </button>
    </>
  );
};
