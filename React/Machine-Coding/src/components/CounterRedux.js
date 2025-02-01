const CounterRedux = () => {
  const increament = () => {};
  const decreament = () => {};

  return (
    <div>
      <h2 className="text-xl leading-10">
        3. Counter ( With Redux Store ) TBD{" "}
      </h2>
      <p>
        This component has been created using Redux Store and managing the state
        in store
      </p>

      <div className="text-center border-red-400 border mt-4">
        <button
          className="bg-slate-200 p-3 rounded-lg m-2"
          onClick={decreament}
        >
          Decreament
        </button>
        <p>{0}</p>

        <button
          className="bg-slate-200 p-3 rounded-lg m-2"
          onClick={increament}
        >
          Increament
        </button>
      </div>
    </div>
  );
};

export default CounterRedux;
