import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

import { Hono } from "hono";
import { verify } from "hono/jwt";

import { createPostInput, updatePostInput } from "@vaibhavicodes/common";

type Variables = {
  userId: string;
};

const blog = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };

  Variables: Variables;
}>();

blog.use("/", async (c, next) => {
  const authHeader = c.req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return c.json({ message: "Authentication failed" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = await verify(token, c.env.JWT_SECRET);
    c.set("userId", decoded.id);
    await next();
  } catch (err) {
    return c.json({
      message: "Invalid token",
    });
  }
});

blog.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const { title, content, readingTime, tag } = await c.req.json();
  const authorId = c.get("userId");

  const { success } = createPostInput.safeParse({
    title,
    content,
    readingTime,
    tag,
  });
  if (!success) {
    c.status(400);
    return c.json({ error: "Invalid inputs" });
  }

  const postCreated = await prisma.post.create({
    data: { title, content, authorId, readingTime, tag },
  });

  return c.json({ message: "Post created successfully", id: postCreated.id });
});

blog.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const authorId = c.get("userId");
  const { id, content, title, readingTime, tag } = await c.req.json();

  const { success } = updatePostInput.safeParse({
    title,
    content,
    readingTime,
    tag,
  });
  if (!success) {
    c.status(400);
    return c.json({ error: "Invalid inputs" });
  }

  const updatedUser = await prisma.post.update({
    where: {
      id: id,
      authorId,
    },
    data: {
      title,
      content,
      readingTime,
      tag,
    },
  });
  console.log(updatedUser);
  return c.json({
    message: "Successfully updated the user",
  });
});

blog.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const allPosts = await prisma.post.findMany();
  return c.json({ posts: allPosts });
});

blog.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const id = c.req.param("id");
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  });
  return c.json({
    post,
  });
});

export default blog;
