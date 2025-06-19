import { Skeleton } from "antd";

const useLoader = () => {
  const categories_loader = () => {
    return (
      <div className="flex flex-col gap-3">
        {Array.from({ length: 9 }).map((_, idx) => (
          <Skeleton.Input key={idx} active size="default" />
        ))}
      </div>
    );
  };

  return { categories_loader };
};

export default useLoader;
