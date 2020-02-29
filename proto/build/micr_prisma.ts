/* eslint-disable */
import { Empty } from './google/protobuf/empty';


export interface User {
  id: string;
  name: string;
  surname: string;
}

export interface UserList {
  users: User[];
}

export interface MicrService {

  FindOne(request: Empty): Promise<UserList>;

  Save(request: Empty): Promise<User>;

}
