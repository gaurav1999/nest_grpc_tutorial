import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { OrderController } from "./order.controller";
import { OrderService } from "./order.service";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:5000',
          package: 'user',
          protoPath: 'src/proto/user/user.proto',
        },
      },
    ])
  ],
  controllers: [OrderController],
  providers: [OrderService],
  exports: []
})
export class OrderModule {}
