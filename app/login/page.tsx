"use client";
import { useForm } from "react-hook-form";
import { userSchema, UserSchemaT } from "./_schema/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupButton } from "@/components/ui/input-group";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { authClient } from "@/libs/authClient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<UserSchemaT>({
    resolver: zodResolver(userSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: UserSchemaT) => {
    console.log("data", data);
    const response = await authClient.signIn.email({
      email: data.email,
      password: data.password,
    });

    const user = response?.data?.user;

    if (user && Object.keys(user).length !== 0) {
      toast.success("Account created successfully");
      router.push("/card");
    }

    if (response.error) {
      toast.error(response.error.message);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-[400px] space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-muted-foreground">Sign in to your account to continue</p>
        </div>

        {/* Form Card */}
        <div className="border border-border rounded-lg bg-card p-6 md:p-8 shadow-sm">
          <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <Field orientation="vertical" className="space-y-2">
              {/* Email Field */}
              <FieldGroup>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <InputGroup>
                  <InputGroupAddon align="inline-start">
                    <Mail className="size-4" />
                  </InputGroupAddon>
                  <InputGroupInput
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    aria-invalid={!!errors.email}
                    {...register("email")}
                  />
                </InputGroup>
                {errors?.email && <FieldError>{errors.email.message}</FieldError>}
              </FieldGroup>

              {/* Password Field */}
              <FieldGroup>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <InputGroup>
                  <InputGroupAddon align="inline-start">
                    <Lock className="size-4" />
                  </InputGroupAddon>
                  <InputGroupInput
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    aria-invalid={!!errors.password}
                    {...register("password")}
                  />
                  <InputGroupAddon align="inline-end">
                    <InputGroupButton
                      type="button"
                      variant="ghost"
                      onClick={() => setShowPassword((prev) => !prev)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
                {errors?.password && <FieldError>{errors.password.message}</FieldError>}
              </FieldGroup>

              {/* Submit Button */}
              <div className="pt-2">
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Signing in..." : "Sign in"}
                </Button>
              </div>
            </Field>
          </form>

          {/* Footer Links */}
          <div className="mt-6 text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-primary hover:underline font-medium">
                Sign up
              </Link>
            </p>
            <Link href="/forgot-password" className="text-sm text-primary hover:underline block">
              Forgot your password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
