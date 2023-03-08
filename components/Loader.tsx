export interface ILoader {}

const Loader: React.FC<ILoader> = () => {
  return <div className={`h-[25.375rem] w-full p-4 rounded-2xl loader`}></div>;
};

export default Loader;
