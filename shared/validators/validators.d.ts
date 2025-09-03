import { z } from "zod";
declare const UserSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodEmail;
    password: z.ZodString;
    role: z.ZodEnum<{
        user: "user";
        organizer: "organizer";
        admin: "admin";
    }>;
    phone: z.ZodNumber;
}, z.core.$strip>;
declare const EventSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodDefault<z.ZodString>;
    category: z.ZodDefault<z.ZodString>;
    address: z.ZodString;
    startTime: z.ZodDate;
    endTime: z.ZodDate;
    capacity: z.ZodNumber;
    price: z.ZodDefault<z.ZodNumber>;
    status: z.ZodEnum<{
        upcoming: "upcoming";
        ongoing: "ongoing";
        completed: "completed";
        cancelled: "cancelled";
    }>;
}, z.core.$strip>;
export { UserSchema, EventSchema };
