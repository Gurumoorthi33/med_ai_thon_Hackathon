import { z } from "zod";

export const api = {
  subscribers: {
    create: {
      path: "/api/subscribers",
      input: z.object({
        email: z.string().email("Please enter a valid email address"),
      }),
    },
  },
};