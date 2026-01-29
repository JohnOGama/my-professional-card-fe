'use client'
import { useForm } from "react-hook-form";
import { signupSchema, SignupSchemaT } from "./_schema/signupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupButton } from "@/components/ui/input-group";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { authClient } from "@/libs/authClient";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const SignupPage = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)
  const {handleSubmit, register, formState: {errors, isSubmitting, isValid}} = useForm<SignupSchemaT>({
    resolver: zodResolver(signupSchema),
    mode: "onChange"
  })

  const onSubmit = async (data: SignupSchemaT) => {
    if(isValid) {
      const response = await authClient.signUp.email({
        password: data.password,
        email: data.email,
        name: data.name,
      })

      const user = response?.data?.user

      if(user && Object.keys(user).length !== 0) {
        toast.success("Account created successfully")
        router.push("/login")
      }

      if(response.error) {
        toast.error(response.error.message)
      }
    }
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-[400px] space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Create an account</h1>
          <p className="text-muted-foreground">Enter your information to get started</p>
        </div>

        {/* Form Card */}
        <div className="border border-border rounded-lg bg-card p-6 md:p-8 shadow-sm">
          <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <Field orientation="vertical" className="space-y-2">
              {/* Name Field */}
              <FieldGroup>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <InputGroup>
                  <InputGroupAddon align="inline-start">
                    <User className="size-4" />
                  </InputGroupAddon>
                  <InputGroupInput
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    aria-invalid={!!errors.name}
                    {...register("name")}
                  />
                </InputGroup>
                {errors?.name && (
                  <FieldError>{errors.name.message}</FieldError>
                )}
              </FieldGroup>

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
                {errors?.email && (
                  <FieldError>{errors.email.message}</FieldError>
                )}
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
                      onClick={() => setShowPassword(prev => !prev)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
                {errors?.password && (
                  <FieldError>{errors.password.message}</FieldError>
                )}
              </FieldGroup>

              {/* Confirm Password Field */}
              <FieldGroup>
                <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
                <InputGroup>
                  <InputGroupAddon align="inline-start">
                    <Lock className="size-4" />
                  </InputGroupAddon>
                  <InputGroupInput
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    aria-invalid={!!errors.confirmPassword}
                    {...register("confirmPassword")}
                  />
                  <InputGroupAddon align="inline-end">
                    <InputGroupButton
                      type="button"
                      variant="ghost"
                      onClick={() => setShowConfirmPassword(prev => !prev)}
                      aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                    >
                      {showConfirmPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
                {errors?.confirmPassword && (
                  <FieldError>{errors.confirmPassword.message}</FieldError>
                )}
              </FieldGroup>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating account..." : "Sign up"}
                </Button>
              </div>
            </Field>
          </form>

          {/* Footer Links */}
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary hover:underline font-medium"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
