import { useState, useEffect } from "react";
import Producto from "./Producto";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const ProductosContainer = () => {
  const [productos, setProductos] = useState([]);

  // useEffect(() => {
  //   pedirDatos().then((response) => {
  //     setProductos(response);
  //   });
  // }, []);

  useEffect(() => {
    const productosRef = collection(db, "productos");
    getDocs(productosRef).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, []);

  return (
    <div className=" bg-slate-200">
      <h2 className="text-center py-3 bg-sky-700 text-white font-medium text-2xl">
        PRODUCTOS
      </h2>
      <div className="mx-auto my-2 flex flex-col md:flex-row flex-wrap justify-around  w-full  border-solid m-auto p-7  ">
        {productos.map((item) => (
          // <p key={item.id}> {item.nombre} </p>
          <Producto key={item.id} producto={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductosContainer;
