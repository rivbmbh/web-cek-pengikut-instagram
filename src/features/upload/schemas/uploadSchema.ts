import { z } from "zod";

export const uploadSchema = z.object({
  followers: z
    .any()
    .transform((val) => (val instanceof FileList ? val[0] : val))
    .superRefine((file, ctx) => {
      if (!file) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "File is required",
        });
        return;
      }

      if (!(file instanceof File)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Invalid file input",
        });
        return;
      }

      if (!file.name.endsWith(".json")) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "File must be in .json format",
        });
      }

      if (file.size >= 1024 * 1024) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "File size must not exceed 1MB",
        });
      }
    }),

  following: z
    .any()
    .transform((val) => (val instanceof FileList ? val[0] : val))
    .superRefine((file, ctx) => {
      if (!file) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "File is required",
        });
        return;
      }

      if (!(file instanceof File)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Invalid file input",
        });
        return;
      }

      if (!file.name.endsWith(".json")) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "File must be in .json format",
        });
      }

      if (file.size >= 1024 * 1024) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "File size must not exceed 1MB",
        });
      }
    }),
});

export type UploadSchema = z.infer<typeof uploadSchema>;
