import { clerkClient } from "@clerk/nextjs/server";
import prisma from "./prisma";

export async function seed() {
  try {
    // Create admin user in Clerk
    const adminUser = await clerkClient.users.createUser({
      username: "admin",
      password: "qwerty",
      publicMetadata: { role: "admin" }
    });

    // Create admin in our database
    await prisma.admin.create({
      data: {
        id: adminUser.id,
        username: "admin"
      }
    });

    console.log("Admin user created successfully");
  } catch (error) {
    console.error("Error seeding admin:", error);
  }
}