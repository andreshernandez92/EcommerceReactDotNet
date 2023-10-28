import { Remove, Add, Delete } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { BasketItem } from "../../app/models/basket";
import { useAppSelector, useAppDispatch } from "../../app/store/configStore";
import { removeBasketItemAsync, addBasketItemAsync } from "./basketSlice";

interface Props {
  items: BasketItem[];
  isBasket?: boolean;
}

export default function BasketTable({ items, isBasket = true }: Props) {
  const { status } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();

  return (
    <>
      {items.map((item) => (
        <Card key={item.productId} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Box display="flex" alignItems="center">
              <img src={item.pictureUrl} alt={item.name} style={{ height: 50, marginRight: 20 }} />
              <Typography variant="body1">{item.name}</Typography>
            </Box>
            <Typography variant="body1">Price: ${item.price.toFixed(2)}</Typography>
            <Box display="flex" alignItems="center">
              {isBasket && (
                <LoadingButton
                  loading={status === "pendingRemoveItem" + item.productId + "rem"}
                  onClick={() =>
                    dispatch(
                      removeBasketItemAsync({
                        productId: item.productId,
                        quantity: 1,
                        name: "rem",
                      })
                    )
                  }
                  color="error"
                >
                  <Remove />
                </LoadingButton>
              )}
              <Typography variant="body1">Quantity: {item.quantity}</Typography>
              {isBasket && (
                <LoadingButton
                  loading={status === "pendingAddItem" + item.productId}
                  onClick={() => dispatch(addBasketItemAsync({ productId: item.productId }))}
                  color="secondary"
                >
                  <Add />
                </LoadingButton>
              )}
            </Box>
            <Typography variant="body1">Subtotal: ${(item.price * item.quantity).toFixed(2)}</Typography>
            {isBasket && (
              <LoadingButton
                loading={status === "pendingRemoveItem" + item.productId + "del"}
                onClick={() =>
                  dispatch(
                    removeBasketItemAsync({
                      productId: item.productId,
                      quantity: item.quantity,
                      name: "del",
                    })
                  )
                }
                color="error"
              >
                <Delete />
              </LoadingButton>
            )}
          </CardContent>
        </Card>
      ))}
    </>
  );
}
