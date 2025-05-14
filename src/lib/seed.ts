import { clerkClient } from "@clerk/nextjs/server";
import dbConnect from "./mongoose";
import { Admin } from "@/models";

export async function seed() {
  try {
    await dbConnect();

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ username: "admin" });
    
    if (!existingAdmin) {
      // Create admin user in Clerk
      const adminUser = await clerkClient.users.createUser({
        username: "admin",
        password: "qwerty",
        publicMetadata: { role: "admin" }
      });

      // Create admin in MongoDB
      await Admin.create({
        _id: adminUser.id,
        username: "admin"
      });

      console.log("Admin user created successfully");
    }
  } catch (error) {
    console.error("Error seeding admin:", error);
  }
}