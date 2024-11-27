// import { AiFillDelete, AiFillHeart } from "react-icons/ai";
// import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";
// import { Link } from "react-router-dom";
// import { memo, useEffect, useRef, useState } from "react";
// import { toast } from "react-toastify";
// import Axios from "../Axios";
// import useAuth from "../../hooks/useAuth";



// const CartItems = ({ cartId, data, qty, size, deleteItem, updateData }) => {
//   const [currentQty, setCurrentQty] = useState(qty);
//   const [debounceQty, setDebounceQty] = useState(null);
//   const { auth, setAuth } = useAuth();
//   const firstUpdate = useRef(true);
//   useEffect(() => {
//     const handler = setTimeout(() => {
//       console.log("debounce");
//       if (firstUpdate.current) {
//         firstUpdate.current = false;
//         return;
//       }
//       setDebounceQty(currentQty);
//     }, 450);
//     return () => {
//       clearTimeout(handler);
//     };
//   }, [currentQty]);
//   const changeQty = async () => {
//     try {
//       const response = await Axios.put(
//         `/cart/update/${cartId}`,
//         {
//           qty: debounceQty,
//         },
//         {
//           headers: {
//             Authorization: localStorage.getItem("jwt"),
//           },
//         }
//       );
//       console.log(response.data);
//       updateData(response.data.cart);
//       // if (response.data.success === true) {
//       toast.success("Quantity updated successfully");
//       setAuth({ ...auth, cartSize: auth.cartSize - qty + debounceQty });
//       // }
//     } catch (error) {
//       toast.error("Something went wrong");
//     }
//   };
//   useEffect(() => {
//     if (debounceQty !== null) {
//       changeQty();
//     }
//   }, [debounceQty]);
//   return (
//     <tr>
//       <td>
//         <div className="cart-product-cont">
//           <div className="cart-image-cont">
//             {/* <Link to={`/product/${data.slug}`}
//               style={{ textDecoration: "none" }}
//             >
//               <img src={data.image} alt="cart-img" />
//             </Link> */}
//             <Link to={data ? `/product/${data.slug}` : "#"} style={{ textDecoration: "none" }}>
//               <img src={data?.image || "fallback-image-url"} alt="cart-img" />
//             </Link>

//           </div>
//           <div className="cart-name-cont">
//             <p style={{ textAlign: "left" }}>
//               {data.brand} {data.name}
//             </p>
//             <div className="cart-name-cont-btn">
//               <button onClick={deleteItem}>
//                 <AiFillDelete /> delete item
//               </button>
//               <button>
//                 <AiFillHeart /> move to favorite
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="cart-mobile-info">
//           <p>Size: {size}</p>
//           <p>Quantity: {size}</p>
//           <p>Price: ₹ {data.price}/item</p>
//         </div>
//       </td>
//       <td className="cart-subheader">
//         <p>{size}</p>
//       </td>
//       <td className="td-qty cart-subheader">
//         <div>
//           <button
//             onClick={() =>
//               setCurrentQty((prev) => (prev > 0 ? prev - 1 : prev))
//             }
//           >
//             <HiMinusCircle />
//           </button>
//           <p>{currentQty}</p>
//           <button onClick={() => setCurrentQty((prev) => prev + 1)}>
//             <HiPlusCircle />
//           </button>
//         </div>
//       </td>
//       <td className="cart-subheader">
//         <p>₹ {qty * data.price}</p>
//       </td>
//     </tr>
//   );
// };

// export default memo(CartItems);

import { AiFillDelete, AiFillHeart } from "react-icons/ai";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { memo, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import Axios from "../Axios";
import useAuth from "../../hooks/useAuth";
import PropTypes from "prop-types";

const CartItems = ({ cartId, data, qty, size, deleteItem, updateData }) => {
  const [currentQty, setCurrentQty] = useState(qty);
  const [debounceQty, setDebounceQty] = useState(null);
  const { auth, setAuth } = useAuth();
  const firstUpdate = useRef(true);

  useEffect(() => {
    const handler = setTimeout(() => {
      console.log("debounce");
      if (firstUpdate.current) {
        firstUpdate.current = false;
        return;
      }
      setDebounceQty(currentQty);
    }, 450);
    return () => {
      clearTimeout(handler);
    };
  }, [currentQty]);

  const changeQty = async () => {
    try {
      const response = await Axios.put(
        `/cart/update/${cartId}`,
        { qty: debounceQty },
        {
          headers: {
            Authorization: localStorage.getItem("jwt"),
          },
        }
      );
      console.log(response.data);
      updateData(response.data.cart);
      toast.success("Quantity updated successfully");
      setAuth({ ...auth, cartSize: auth.cartSize - qty + debounceQty });
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    if (debounceQty !== null) {
      changeQty();
    }
  }, [debounceQty]);

  if (!data) {
    return (
      <tr>
        <td colSpan={4} style={{ textAlign: "center" }}>
          Item data is not available.
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td>
        <div className="cart-product-cont">
          <div className="cart-image-cont">
            <Link to={`/product/${data.slug}`} style={{ textDecoration: "none" }}>
              <img src={data.image || "fallback-image-url"} alt="cart-img" />
            </Link>
          </div>
          <div className="cart-name-cont">
            <p style={{ textAlign: "left" }}>
              {data.brand || "Unknown Brand"}
            </p>
            <div className="cart-name-cont-btn">
              <button onClick={deleteItem}>
                <AiFillDelete /> delete item
              </button>
              <button>
                <AiFillHeart /> move to favorite
              </button>
            </div>
          </div>
        </div>
        <div className="cart-mobile-info">
          <p>Size: {size || "N/A"}</p>
          <p>Quantity: {currentQty}</p>
          <p>Price: ₹ {data.price}/item</p>
        </div>
      </td>
      <td className="cart-subheader">
        <p>{size || "N/A"}</p>
      </td>
      <td className="td-qty cart-subheader">
        <div>
          <button
            onClick={() =>
              setCurrentQty((prev) => (prev > 0 ? prev - 1 : prev))
            }
          >
            <HiMinusCircle />
          </button>
          <p>{currentQty}</p>
          <button onClick={() => setCurrentQty((prev) => prev + 1)}>
            <HiPlusCircle />
          </button>
        </div>
      </td>
      <td className="cart-subheader">
        <p>₹ {currentQty * data.price}</p>
      </td>
    </tr>
  );
};

// CartItems.defaultProps = {
//   data: {
//     slug: "",
//     image: "",
//     brand: "Unknown Brand",
//     name: "Unknown Item",
//     price: 0,
//   },
//   size: "N/A",
//   qty: 1,
// };

// CartItems.propTypes = {
//   cartId: PropTypes.string.isRequired,
//   data: PropTypes.shape({
//     slug: PropTypes.string,
//     image: PropTypes.string,
//     brand: PropTypes.string,
//     name: PropTypes.string,
//     price: PropTypes.number,
//   }),
//   qty: PropTypes.number.isRequired,
//   size: PropTypes.string,
//   deleteItem: PropTypes.func.isRequired,
//   updateData: PropTypes.func.isRequired,
// };

export default memo(CartItems);
