import React, { useEffect, useState } from "react";
import GalleryCard from "./components/GalleryCard";
import axios from "axios";
import Button from "./components/Button";

const App = () => {
  const [imagesData, setImagesData] = useState([]);
  const [page, setPage] = useState("1");
  const [limit, setLimit] = useState("10");

  const handlePage = (n) => {
    setPage(n);
  };
  // for previous and next button
  const handleNext = () => {
    setPage((prev) => String(Number(prev) + 1));
  };

  const handlePrev = () => {
    if (Number(page) > 1) {
      setPage((prev) => String(Number(prev) - 1));
    }
  };

  const paginationHandler = async () => {
    try {
      const result = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=${limit}`,
      );
      const { data } = result; // ✅ Fix: pehle result aao, phir data nikalo
      setImagesData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const result = await axios.get("https://picsum.photos/v2/list");
      const { data } = result;
      setImagesData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    paginationHandler();
  }, [page, limit]);

  return (
    // <div className='bg-black min-h-screen text-white'>
    <div
      className="min-h-screen text-white"
      style={{
        background: "linear-gradient(135deg, #071c3dff, #266c51ff, #186b53ff)",
      }}
    >
      {/* ✅ Fix: h1 JSX ke andar rakha */}
      <h1 className="text-center text-3xl font-bold py-6">
        Abdullah's Gallery Albums
      </h1>
      <div className="bg-gray-800/50 h-[60px] w-full flex justify-around items-center mb-4">
        <div className="flex gap-3 items-center justify-center w-80">
          <h3 className="font-bold text-xl">Pages</h3>
          <Button title="1" handlePage={handlePage} />
          <Button title="2" handlePage={handlePage} />
          <Button title="3" handlePage={handlePage} />
          <Button title="4" handlePage={handlePage} />
          <Button
            title="PREV"
            handlePage={handlePrev}
            className="bg-transparent border border-blue-400 text-blue-400 font-bold px-4 py-2 rounded cursor-pointer hover:bg-blue-400/10"
          />

          <Button
            title="NEXT"
            handlePage={handleNext}
            className="bg-transparent border border-blue-400 text-blue-400 font-bold px-4 py-2 rounded cursor-pointer hover:bg-blue-400/10"
          />
        </div>

        <div className="flex gap-3 items-center">
          <h3 className="font-bold text-xl">Limit</h3>
          <select
            onChange={(event) => setLimit(event.target.value)}
            className="p-2 w-[100px] h-[40px] cursor-pointer outline-none rounded bg-gray-900/50"
          >
            <option className="bg-gray-800" value="10">
              10
            </option>
            <option className="bg-gray-800" value="25">
              25
            </option>
            <option className="bg-gray-800" value="50">
              50
            </option>
            <option className="bg-gray-800" value="100">
              100
            </option>
          </select>
        </div>
      </div>
      <div className="p-2 flex justify-center items-center gap-5 flex-wrap">
        {imagesData.map((item) => (
          <GalleryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
