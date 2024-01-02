import { useState, useEffect } from "react";
import Producto from "./Producto";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const OtrosProductosContainer = () => {
  const [otrosProductos, setOtrosProductos] = useState([]);

  const cocinaHigiene = otrosProductos.filter((prod) =>
    prod.linea == "cocina e higiene" ? prod : null
  );
  const films = otrosProductos.filter((prod) =>
    prod.linea == "film" ? prod : null
  );

  const backsImages = [
    "bg-prod18",
    "bg-prod19",
    "bg-prod20",
    "bg-prod21",
    "bg-prod22",
    "bg-prod23",
    "bg-prod24",
    "bg-prod25",
    "bg-prod26",
    "bg-prod27",
    "bg-prod28",
    "bg-prod29",
    "bg-prod30",
    "bg-prod31",
  ];

  // useEffect(() => {
  //   pedirDatos().then((response) => {
  //     setProductos(response);
  //   });
  // }, []);

  useEffect(() => {
    const productosRef = collection(db, "productos");
    getDocs(productosRef).then((resp) => {
      setOtrosProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, []);

  return (
    <div className="bg-gray-light_gray ">
      <div className=" sm:wrapper p-5 md:w-[1440] md:pt-[46px] md:px-[80px] md:pb-[90px] md:mt-[46px] md:mx-[80px] ">
        <div className="flex flex-col gap-6 mb-[24px]">
          <h2 className=" font-medium  text-3xl md:text-[48px]">
            Otros Productos de la Marca
          </h2>
          <h3 className="font-bold text-3xl  shadow-linea my-6">
            Rollos de Cocina e Higiene Institucional
          </h3>
        </div>
        <div className="mx-auto flex flex-col md:flex-row flex-wrap justify-center items-center w-full  border-solid m-auto   gap-5">
          {cocinaHigiene.map((item) => (
            // <p key={item.id}> {item.nombre} </p>

            <Producto
              key={item.id}
              producto={item}
              imagenBack={backsImages[item.imagen - 18]}
            />
          ))}
        </div>
        <h3 className="font-bold text-3xl my-6  shadow-linea">
          Film strech y alimenticio PVC
        </h3>
        <div className="mx-auto flex flex-col md:flex-row flex-wrap justify-center items-center w-full  border-solid m-auto   gap-5">
          {films.map((item) => (
            // <p key={item.id}> {item.nombre} </p>

            <Producto
              key={item.id}
              producto={item}
              imagenBack={backsImages[item.imagen - 18]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtrosProductosContainer;
