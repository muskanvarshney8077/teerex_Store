import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Cards = ({ data, handleAddToCart }) => {
  let cartData = JSON.parse(localStorage.getItem("cartsData"));

  const { imageURL, id, name, price } = data;
  const AddToCartButton = ({ id, handleAddToCart }) => {
    return (
      <Button
        value={id}
        onClick={(e) => handleAddToCart(e.target.value, 1)}
        size="small"
        sx={{
          backgroundColor: "#75dc94",
          color: "black",
          fontWeight: 600,
          ":hover": {
            backgroundColor: "white",
            border: "1px solid #b4ecc4",
            color: "#75dc94",
          },
        }}
      >
        Add To Cart
      </Button>
    );
  };

  const QtyHandler = ({ id, qty, handleAddToCart }) => {
    // console.log(qty);
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "1rem",
          backgroundColor: "#75dc94",
          color: "black",
          fontWeight: 600,
        }}
      >
        <button onClick={() => handleAddToCart(id, qty - 1)}>-</button>
        <Typography>{qty}</Typography>
        <button onClick={() => handleAddToCart(id, qty + 1)}>+</button>
      </Box>
    );
  };
  return (
    <Card sx={{ maxWidth: 250, border: "1px solid #b4ecc4" }}>
      <CardContent sx={{ position: "absolute", padding: "1.25rem" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: "1rem",
            fontWeight: 800,
            backgroundColor: " black",
            color: "white",
            padding: "0.15rem",
          }}
        >
          {name}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ height: 150, margin: "1rem", marginBottom: 0 }}
        image={imageURL}
        title="green iguana"
      />

      <CardActions sx={{ justifyContent: "space-between", margin: "0 0.5rem" }}>
        <Typography size="small" sx={{ fontWeight: 600 }}>
          RS {price}
        </Typography>
        {cartData.map((cart) => Number(cart.itemId)).includes(Number(id)) ? (
          <QtyHandler
            id={id}
            qty={
              cartData.map((ele) => {
                if (Number(ele.itemId) === Number(id))
                  return Number(ele.itemQty);
                else return null;
              })[0]
            }
            handleAddToCart={handleAddToCart}
          />
        ) : (
          <AddToCartButton id={id} handleAddToCart={handleAddToCart} />
        )}
        {/* {console.log(
          cartData.map((item) => Number(item.itemId)).includes(Number(id))
        )}
        <AddToCartButton id={id} handleAddToCart={handleAddToCart} /> */}
      </CardActions>
    </Card>
  );
};

export default Cards;
