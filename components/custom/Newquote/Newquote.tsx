import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UploadCloud } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MAX_FILE_SIZE_MB = 5;
const ACCEPTED_TYPES = ["image/png", "image/jpeg", "application/pdf"] as const;

const formSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z
    .string()
    .min(7)
    .max(15)
    .regex(/^[+]?\d{7,15}$/i),
  company: z.string().max(120).optional().or(z.literal("")),
  message: z.string().min(10),
  upload: z
    .instanceof(FileList)
    .optional()
    .refine((files) => !files || files.length <= 1, "Upload only one file")
    .refine(
      (files) =>
        !files ||
        files.length === 0 ||
        ACCEPTED_TYPES.includes(files[0]?.type as any),
      `File must be one of: ${ACCEPTED_TYPES.join(", ")}`
    )
    .refine(
      (files) =>
        !files ||
        files.length === 0 ||
        (files[0]?.size ?? 0) <= MAX_FILE_SIZE_MB * 1024 * 1024,
      `Max file size ${MAX_FILE_SIZE_MB}MB`
    ),
});

export default function ContactFormShadcn() {
  const [submitting, setSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      upload: undefined,
    },
    mode: "onBlur",
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true);
    try {
      const payload = new FormData();
      payload.append("name", values.name);
      payload.append("email", values.email);
      payload.append("phone", values.phone);
      payload.append("company", values.company ?? "");
      payload.append("message", values.message);
      if (values.upload && values.upload.length > 0) {
        payload.append("file", values.upload[0]);
      }

      // Resend expects a JSON payload, not multipart — handle file separately if needed
      const body: Record<string, any> = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        company: values.company,
        message: values.message,
      };
      if (values.upload && values.upload.length > 0) {
        const file = values.upload[0];
        const base64 = await file
          .arrayBuffer()
          .then((b) => Buffer.from(b).toString("base64"));
        body.file = {
          name: file.name,
          type: file.type,
          data: base64,
        };
      }

      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      form.reset();
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl p-4">
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        inputMode="tel"
                        placeholder="+91XXXXXXXXXX"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Digits only, optional +</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company / Organization</FormLabel>
                    <FormControl>
                      <Input placeholder="Company (optional)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="upload"
                render={({ field: { value, onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel>Attachment</FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-3">
                        <label className="inline-flex cursor-pointer items-center gap-2 rounded-2xl border px-4 py-2 text-sm hover:bg-accent">
                          <UploadCloud className="h-4 w-4" />
                          <span>Choose file</span>
                          <input
                            type="file"
                            className="sr-only"
                            accept={ACCEPTED_TYPES.join(",")}
                            onChange={(e) =>
                              onChange(e.target.files as FileList)
                            }
                            {...field}
                          />
                        </label>
                        <span className="text-sm text-muted-foreground">
                          {value && value.length > 0
                            ? value[0].name
                            : `PNG/JPEG/PDF · ≤ ${MAX_FILE_SIZE_MB}MB`}
                        </span>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={5}
                        placeholder="Tell us about your project…"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end gap-2">
                <Button
                  type="reset"
                  variant="outline"
                  onClick={() => form.reset()}
                  disabled={submitting}
                >
                  Reset
                </Button>
                <Button type="submit" disabled={submitting}>
                  {submitting ? "Submitting…" : "Submit"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
