import { Controller, Logger } from '@nestjs/common';
import { GetUserRequest, User, UserServiceController, UserServiceControllerMethods } from '../proto/user/user';

@Controller()
@UserServiceControllerMethods()
export class UserController implements UserServiceController {
  private readonly logger = new Logger(UserController.name);
  getUser(request: GetUserRequest): Promise<User> {
    this.logger.log(request);
    // Implement your logic to retrieve the item based on the request
    // You can use the request.itemId to fetch the specific item from your data source
    const item: User = {
      id: request.id,
      name: 'Sample Item',
      isActive: true
    };
    return Promise.resolve(item);
  }
}
