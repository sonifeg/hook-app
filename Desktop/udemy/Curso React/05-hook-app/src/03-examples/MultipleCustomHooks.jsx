import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";

export const MultipleCustomHooks = () => {
  const { increment, counter } = useCounter(1);
  const { data, isLoading} = useFetch(
    ` https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  //console.log({ data, isLoading, hasError });
  return (
    <>
      <h3>Breaking bad quotes</h3>
      <hr />
      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
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
