import { Card, CardContent, Typography } from "@mui/material";
import { useAppSelector } from "../../app/store/configStore";
import { currencyFormat } from "../../app/utils/util";

interface Props {
  subtotal?: number;
}

export default function BasketSummary({ subtotal }: Props) {
  const { basket } = useAppSelector((state) => state.basket);
  if (subtotal === undefined)
    subtotal = basket?.items.reduce((sum, item) => sum + (item.quantity * item.price), 0) ?? 0;
  const deliveryFee = subtotal > 100 ? 0 : 50;

  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" component="div">
            Subtotal: {currencyFormat(subtotal)}
          </Typography>
          <Typography variant="h6" component="div">
            Delivery fee*: {currencyFormat(deliveryFee)}
          </Typography>
          <Typography variant="h6" component="div">
            Total: {currencyFormat(subtotal + deliveryFee)}
          </Typography>
          <Typography color="text.secondary" style={{ fontStyle: "italic" }}>
            *Orders over $100 qualify for free delivery
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
