import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { UserController } from "./user.controller";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'user',
          protoPath: 'src/proto/user/user.proto',
        },
      },
    ])
  ],
  controllers: [UserController],
  providers: [],
})
export class UserModule {}
