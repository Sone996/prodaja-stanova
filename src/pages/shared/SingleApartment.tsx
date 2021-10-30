import { FC } from "react";
import Scroll from "../../components/ui/Scroll";

const images = [
  "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
];

const SingleApartment: FC = () => {
  const editData = () => {
    console.log("edit");
  };

  return (
    <div className="flex h-full w-full">
      <div className="flex flex-col w-2/5 h-full">
        <div className="flex h-full w-full border-r">
          {/* ------------------------------------------------------------------------------------------------------------- */}
          <div className="flex justify-center h-full w-full">
            <div className="relative h-full w-full">
              <Scroll>
                {images.map((image: string, index: number) => (
                  <img key={index} className="p-4" src={image} alt="" />
                ))}
              </Scroll>
            </div>
          </div>
          {/* ------------------------------------------------------------------------------------------------------------- */}
        </div>
      </div>
      <div className="flex flex-col w-3/5 h-full">
        <div className="flex h-1/2 w-full border-b p-2">
          <div className="flex flex-col w-full justify-between">
            <div className="flex mt-4">
              <div className="flex flex-col w-1/2">
                <span className="my-1 text-xl">id: 1</span>
                <span className="my-1 text-xl">labela: 1</span>
                <span className="my-1 text-xl">Kvadratura: 200</span>
              </div>
              <div className="flex flex-col w-1/2">
                <span className="my-1 text-xl">br. soba: 5</span>
                <span className="my-1 text-xl">sprat: 0</span>
                <span className="my-1 text-xl">terase: 2</span>
              </div>
            </div>
            <div className="flex w-full justify-between">
              <span className="flex items-center px-2 py-1 font-semibold uppercase rounded-md tracking-wide text-xs bg-darkGreen text-white bg-opacity-50">
                Dostupan
              </span>
              <button
                className="button bg-blue-500 w-1/4 text-white"
                onClick={editData}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
        <div className="flex h-1/2 w-full p-2">
          Podaci o kopcu ako je prodat ili tabela mogucih kupaca?
        </div>
      </div>
    </div>
  );
};

export default SingleApartment;
