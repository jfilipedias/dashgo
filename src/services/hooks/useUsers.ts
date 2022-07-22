import { useQuery } from "@tanstack/react-query";

import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  date: string;
};

const MILLISECONDS_TO_SECONDS = 1000;

export const getUsers = async (): Promise<User[]> => {
  const { data } = await api.get("/users");

  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString("en", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return users;
};

export const useUsers = () => {
  return useQuery(["users"], getUsers, {
    staleTime: MILLISECONDS_TO_SECONDS * 5,
  });
};
