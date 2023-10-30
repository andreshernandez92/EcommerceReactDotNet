import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Paper,
} from "@mui/material";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import OrderDetailed from "./OrderDetailed";
import { Order } from "../../app/models/order";
import { currencyFormat } from "../../app/utils/util";

export default function Orders() {
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedOrderNumber, setSelectedOrderNumber] = useState(0);

  useEffect(() => {
    agent.Orders.list()
      .then((orders) => setOrders(orders))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingComponent message="Loading orders..." />;

  if (selectedOrderNumber > 0)
    return (
      <OrderDetailed
        order={orders?.find((o) => o.id === selectedOrderNumber)!}
        setSelectedOrder={setSelectedOrderNumber}
      />
    );

  return (
    <Paper>
      <List>
        {orders?.map((order) => (
          <ListItem
            key={order.id}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <ListItemText
              primary={`Order Number: ${order.id}`}
              secondary={`Total: ${currencyFormat(order.total)}`}
            />
            <ListItemSecondaryAction>
              <Button onClick={() => setSelectedOrderNumber(order.id)}>
                View
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
