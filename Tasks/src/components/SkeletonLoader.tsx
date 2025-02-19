const SkeletonLoader = () => {
    return (
      <div className="bg-slate-800 justify-center w-1/2 m-auto flex flex-col gap-4 items-center rounded-md min-h-[45rem]">
        <div className="w-44 h-44 rounded-full overflow-hidden bg-slate-700 flex items-center justify-center animate-pulse"></div>
  
        <div className="h-10 border border-slate-800 w-80 bg-slate-700 animate-pulse"></div>
        <div className="h-10 border border-slate-800 w-80 bg-slate-700 animate-pulse"></div>
        <div className="h-10 border border-slate-800 w-80 bg-slate-700 animate-pulse"></div>
        <div className="h-10 border border-slate-800 w-80 bg-slate-700 animate-pulse"></div>
      </div>
    );
  };
  
  export default SkeletonLoader;
  