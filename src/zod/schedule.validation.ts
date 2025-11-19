import { z } from "zod";

export const createScheduleZodSchema = z.object({
  startDateTime: z.string(),
  endDateTime: z.string(),
  doctorIds: z.array(z.string()).min(1, "At least one doctor required"),
});

export const updateScheduleZodSchema = z.object({
  startDateTime: z.string().optional(),
  endDateTime: z.string().optional(),
});
