import { Publisher, Subjects, OrderCancelledEvent } from '@hltickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
