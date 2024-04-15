import { z } from 'zod';

export const UserDtoSchema = z.object({
  user: z.object({
    email: z.string(),
    token: z.string(),
    username: z.string(),
    bio: z.nullable(z.string()),
    image: z.string(),
  }),
});

// createdAt : "2024-04-15T13:20:07.622Z"
// email : "123@gmail.com"
// firstName : "Pavel"
// id : "e02b296b-408c-4949-a2c1-3d64b5f5e5e1"
// lastName : "Novikov"
// password : "123123123"
// phone : "+79085550606"
// sub : "078fd223-ce01-4a77-991d-3b4b67928b66"
// updatedAt: "2024-04-15T13:20:07.622Z"

export const UpdateUserDtoSchema = z
  .object({
    email: z.string().email().optional().or(z.literal('')),
    username: z.string().min(5).optional().or(z.literal('')),
    bio: z.string().optional().or(z.literal('')),
    image: z.string().optional().or(z.literal('')),
    password: z.string().min(8).optional().or(z.literal('')),
  })
  .partial()
  .refine((args) => Object.values(args).some(Boolean), {
    path: ['form'],
    message: 'One of the fields must be defined',
  });

export const CreateUserDtoSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
  phone: z.string(),
});

export const LoginUserDtoSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const UserSchema = z.object({
  email: z.string(),
  token: z.string(),
  username: z.string(),
  bio: z.string(),
  image: z.string(),
});
