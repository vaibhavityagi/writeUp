import { z } from "zod";

export const signupInput = z.object({
  email: z.string().email({ message: "Invalid email" }),
  name: z.string().optional(),
  password: z.string().min(6),
});

export type SignupInput = z.infer<typeof signupInput>;

export const signInInput = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(6),
});

export type SignInInput = z.infer<typeof signInInput>;

export const createPostInput = z.object({
  title: z.string(),
  content: z.string(),
  readingTime: z.number(),
  tag: z.enum(["MOTIVATION", "CODE", "DSA", "TECHNICAL"]),
});

export type CreatePostInput = z.infer<typeof createPostInput>;

export const updatePostInput = z.object({
  title: z.string(),
  content: z.string(),
  readingTime: z.number(),
  tag: z.enum(["MOTIVATION", "CODE", "DSA", "TECHNICAL"]),
});

export type UpdatePostInput = z.infer<typeof updatePostInput>;
