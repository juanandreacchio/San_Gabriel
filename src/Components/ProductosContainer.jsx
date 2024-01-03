import { useState, useEffect } from "react";
import Producto from "./Producto";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "/src/App.css";

const ProductosContainer = () => {
  const [productos, setProductos] = useState([]);

  const clasicos = productos.filter((prod) =>
    prod.linea == "clasica" ? prod : null
  );
  const extrasuaves = productos.filter((prod) =>
    prod.linea == "extrasuave" ? prod : null
  );
  const sanmarinos = productos.filter((prod) =>
    prod.linea == "San Marino" ? prod : null
  );
  const desnudos = productos.filter((prod) =>
    prod.linea == "desnudo" ? prod : null
  );

  const backsImages = [
    "bg-prod1",
    "bg-prod2",
    "bg-prod3",
    "bg-prod4",
    "bg-prod5",
    "bg-prod6",
    "bg-prod7",
    "bg-prod8",
    "bg-prod9",
    "bg-prod10",
    "bg-prod11",
    "bg-prod12",
    "bg-prod13",
    "bg-prod14",
    "bg-prod15",
    "bg-prod16",
    "bg-prod17",
  ];

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
    <div
      className="w-full bg-gray-light_gray h-auto pb-6  font-manrope not-italic leading-none  pt-16 "
      id="productos"
    >
      <div className=" p-5 md:p-1  mx-auto md:mx-5  lg:pt-[46px]  lg:pb-[90px] ">
        <div className="flex flex-col gap-6 mb-[24px]">
          <h2 className=" font-bold text-4xl md:text-5xl md:text-[48px]">
            Nuestros productos
          </h2>
          <p className=" text-base md:text-base font-normal leading-[25.888px]">
            Descubrí nuestra selección de bolsones de papel higiénico ideales
            para tu negocio.
          </p>
          <h3 className="font-bold text-3xl text-gray-text">Línea Clásica</h3>
        </div>
        <div className="mx-auto flex flex-col md:flex-row flex-wrap justify-evenly items-center w-full  border-solid m-auto  gap-5">
          {clasicos.map((item) => (
            // <p key={item.id}> {item.nombre} </p>

            <Producto
              key={item.id}
              producto={item}
              imagenBack={backsImages[item.imagen - 1]}
            />
          ))}
        </div>
        <h3 className="font-bold text-3xl my-6">Línea Extrasuave</h3>
        <div className="mx-auto flex flex-col md:flex-row flex-wrap justify-center items-center w-full  border-solid m-auto   gap-5">
          {extrasuaves.map((item) => (
            // <p key={item.id}> {item.nombre} </p>

            <Producto
              key={item.id}
              producto={item}
              imagenBack={backsImages[item.imagen - 1]}
            />
          ))}
        </div>
        <h3 className="font-bold text-3xl my-6">Línea San Marino</h3>
        <div className="mx-auto flex flex-col md:flex-row flex-wrap justify-center items-center w-full  border-solid m-auto   gap-5">
          {sanmarinos.map((item) => (
            // <p key={item.id}> {item.nombre} </p>

            <Producto
              key={item.id}
              producto={item}
              imagenBack={backsImages[item.imagen - 1]}
            />
          ))}
        </div>
        <h3 className="font-bold text-3xl my-6 ">Línea Desnudo</h3>
        <div className="mx-auto flex flex-col md:flex-row flex-wrap justify-center items-center w-full  border-solid m-auto   gap-5">
          {desnudos.map((item) => (
            // <p key={item.id}> {item.nombre} </p>

            <Producto
              key={item.id}
              producto={item}
              imagenBack={backsImages[item.imagen - 1]}
            />
          ))}
        </div>
        {/* <HashLink to="#otrosproductos">
          <button
            type="button"
            className="w-[300px] h-[100px] rounded-cincuenta bg-purple-header hover:bg-purple-activo text-white-white_figma mx-auto block py-[9px] px-[28px] text-2xl font-semibold my-[100px] self-center"
          >
            Ver Otros Productos
          </button>
        </HashLink> */}
      </div>
    </div>
  );
};

export default ProductosContainer;
