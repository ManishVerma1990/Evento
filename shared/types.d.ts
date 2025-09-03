export type User = {
    name: String;
    email: String;
    password: String;
    role: String;
    phone: Number;
};
export type Event = {
    title: String;
    description?: String;
    category?: String;
    address: String;
    startTime: String;
    endTime: String;
    capacity: Number;
    price: Number;
};
