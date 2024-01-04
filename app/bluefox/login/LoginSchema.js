
"use client"
import * as Yup from "yup";

export const LoginSchema = Yup.object({

  email: Yup.string().email().required("Email is MUST"),
  password: Yup.string().min(8).required("Password khai ??"),
});
