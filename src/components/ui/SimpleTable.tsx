import { useEffect, useState, FC } from "react";

const modelCol = (model: Array<{}>, setColumn: any) => {
  let len = Object.keys(model[0]).length;
  let counter = 0;
  let colName: any = [];
  for (const key in model[0]) {
    if (counter <= len) {
      colName[counter] = key;
      counter++;
    }
  }
  setColumn(colName);
};

const SimpleTable: FC<{ titles: any; model: any; singleView?: any }> = ({
  titles,
  model,
  singleView,
}) => {
  const [column, setColumn] = useState([]);

  useEffect(() => {
    if (model.length > 0) {
      modelCol(model, setColumn);
    }
  }, [model]);

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className=" py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className=" shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {titles.map((item: string, index: number) => (
                    <th
                      scope="col"
                      key={index}
                      className="px-6 py-3 text-left text-xs text-center font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {model.map((item: {}, index: number) => (
                  <tr
                    key={index}
                    onClick={() => singleView(item)}
                    className={
                      index % 2 === 0
                        ? "bg-gray-100 hover:bg-darkGreen"
                        : "bg-gray-300 hover:bg-darkGreen"
                    }
                  >
                    {column.map((col, index) => (
                      <td
                        key={index}
                        className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center"
                      >
                        {typeof item[column[index]] === "boolean"
                          ? item[column[index]] + ""
                          : item[column[index]]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleTable;
