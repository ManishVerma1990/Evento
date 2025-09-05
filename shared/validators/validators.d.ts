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
type User = z.infer<typeof UserSchema>;
declare const EventSchema: z.ZodObject<{
    organizerId: z.ZodString;
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
type Event = z.infer<typeof EventSchema>;
declare const RegSchema: z.ZodObject<{
    eventId: z.ZodUUID;
    userId: z.ZodUUID;
    regType: z.ZodString;
    checkIn: z.ZodBoolean;
    paymentStatus: z.ZodEnum<{
        pending: "pending";
        paid: "paid";
        failed: "failed";
        refunded: "refunded";
    }>;
}, z.core.$strip>;
type Registration = z.infer<typeof RegSchema>;
export { UserSchema, User, EventSchema, Event, RegSchema, Registration };
