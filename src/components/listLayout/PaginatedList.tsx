import { ReactNode, useEffect, useState } from "react";

const data1:{ id: number, name: string, last_login: string, image: string }[] = [];

type PaginatedListProps = {
    data: { id: number, name: string, last_login: string, image: string }[],
    itemsPerPage: number,
    filterItem?: string[],
    tableTitle: string,
    titleClass?:string,
    children: (data:any) => ReactNode;
}

export default function PaginatedList({
  data = data1,
  itemsPerPage = 5,
  filterItem,
  tableTitle,
  titleClass,
  children,
}:PaginatedListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const [currentPage, setCurrentPage] = useState(0);
  const [newData, setNewData] = useState<{ id: number, name: string, last_login: string, image: string }[]>([]);

  const numberOfSelection = itemsPerPage;

  const handlePrev = () => {
    if (currentPage != 0) {
      setCurrentPage((prev) => prev - numberOfSelection);
    }
  };
  const handleNext = () => {
    if (currentPage < data.length) {
      setCurrentPage((prev) => prev + numberOfSelection);
    }
  };

  const handleSearch = ({ target: { value } }:{target: {value:string}}, name:string) => {
    setSearchTerm(value);
    let newFilteredData:any = data.filter((item:any) =>
      item[name].toLowerCase().startsWith(value.toLowerCase())
    );
    setFilteredData(newFilteredData);
    setCurrentPage(0);
  };

  useEffect(() => {
    setNewData(
      filteredData?.slice(currentPage, numberOfSelection + currentPage)
    );
  }, [currentPage, filteredData]);

  useEffect(()=>{
    setCurrentPage(0)
  },[itemsPerPage])

  return (
    <div className="w-full">
      <h1 className={`text-2xl mb-5 font-semibold ${titleClass && titleClass}`}>{tableTitle}</h1>

      {data.length > 0 && filterItem && (
        <div className="mb-10 flex justify-end items-center gap-2">
          {filterItem.map((item, index) => (
            <label
              key={index}
              className="flex flex-col sm:flex-row items-center gap-2 text-slate-600 dark:text-slate-100 transition-all duration-500"
            >
              Search by {item[0].toUpperCase() + item.slice(1)}
              <input
                name={item}
                type="text"
                className="py-1 px-2 text-sm min-w-[100px] text-black dark:text-white bg-white dark:bg-slate-800 rounded-full border-0 outline-none ring-1 ring-slate-300 dark:ring-white transition-all duration-500"
                value={searchTerm}
                onChange={(e) => {
                  handleSearch(e, item);
                }}
              />
            </label>
          ))}
        </div>
      )}

      {children({ data: newData })}

      {/* show prev and next button if data exist */}
      {data.length > 0 && (
        <div className="mt-5 md:mt-10 w-full flex gap-4 justify-center items-center">
        <button
          onClick={handlePrev}
          className={`w-6 h-6 md:w-12 md:h-12 text-sm md:text-lg rounded-full flex justify-center items-center transition-all duration-300 ${
            currentPage == 0
              ? "text-slate-400 border-slate-400 dark:text-slate-400 dark:border-slate-400 pointer-events-none"
              : "text-slate-600 border-slate-600 dark:text-white dark:border-white"
          }`}
        >
          &lt;
        </button>

        {data.length && data.map((item, index)=>{
          item = item
          if(index%itemsPerPage == 0 && index >= currentPage && index <= currentPage+itemsPerPage){
            return (
              <button
                key={index}
                onClick={handleNext}
                className={`w-6 h-6 md:w-12 md:h-12 text-sm md:text-lg rounded-full flex justify-center items-center border transition-all duration-300 ${
                  currentPage != index
                    ? "text-slate-400 border-slate-400 dark:text-slate-400 dark:border-slate-400"
                    : "text-slate-600 border-slate-600 dark:text-white dark:border-white pointer-events-none"
                }`}
              >
                {index/itemsPerPage +1}
              </button>
            )
          }
        })}

        <button
          onClick={handleNext}
          className={`w-6 h-6 md:w-12 md:h-12 text-sm md:text-lg rounded-full flex justify-center items-center transition-all duration-300 ${
            currentPage + numberOfSelection >= data.length
              ? "text-slate-400 border-slate-400 dark:text-slate-400 dark:border-slate-400 pointer-events-none"
              : "text-slate-600 border-slate-600 dark:text-white dark:border-white"
          }`}
        >
          &gt;
        </button>
      </div>
      )}
    </div>
  );
}
