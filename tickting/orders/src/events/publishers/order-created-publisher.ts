import { Publisher, OrderCreatedEvent, Subjects } from '@hltickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
