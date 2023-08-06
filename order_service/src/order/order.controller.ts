import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { UserServiceClient } from '../proto/user/user';
import { ClientGrpc } from '@nestjs/microservices';
import { OrderService } from './order.service';


@Controller('order')
export class OrderController {

  constructor(
    private orderService: OrderService,
  ) {}


  @Get('myOrders')
  getOrders() {
    return this.orderService.getOrders('userId1');
  }
}
