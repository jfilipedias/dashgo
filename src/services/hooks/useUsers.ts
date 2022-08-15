import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export type GetUsersResponse = {
  users: User[];
  totalCount: number;
};

const MILLISECONDS_TO_SECONDS = 1000;

export const getUsers = async (page: number): Promise<GetUsersResponse> => {
  const { data, headers } = await api.get("/users", {
    params: {
      page,
    },
  });

  const totalCount = Number(headers["x-total-count"]);

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

  return { users, totalCount };
};

export const useUsers = (page: number, options: UseQueryOptions) => {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: MILLISECONDS_TO_SECONDS * 5,
    ...options,
  });
};
