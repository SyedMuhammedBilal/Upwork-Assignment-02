/* eslint-disable @typescript-eslint/no-useless-constructor */
import { config } from "../config";
import { UserInputInterface, UserInterface } from "../types/user.type";
import axios from "axios";

export class UserService {
  constructor() {}

  public getUsers = async (): Promise<UserInterface[]> => {
    try {
      const { serverUrl } = config;
      const response = await axios.get(serverUrl + "/users");
      return response.data;
    } catch (error) {
      return error as any;
    }
  };

  public updateUser = async (id: number, user: UserInputInterface): Promise<UserInputInterface> => {
    try {
      const { serverUrl } = config;
      const response = await axios.put(serverUrl + `/users/${id}`, user);
      return response.data;
    } catch (error) {
      return error as any;
    }
  }
}
