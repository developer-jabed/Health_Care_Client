/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { createScheduleZodSchema } from "@/zod/schedule.validation";


/**
 * Create Schedule with multiple doctorIds
 */
export async function createScheduleAction(_prevState: any, formData: FormData) {
    try {
        const payload = {
            startDateTime: formData.get("startDateTime") as string,
            endDateTime: formData.get("endDateTime") as string,
            doctorIds: JSON.parse(formData.get("doctorIds") as string),
        };

        const validate = zodValidator(payload, createScheduleZodSchema);
        if (!validate.success) return validate;

        const validatedPayload = validate.data;

        const response = await serverFetch.post("/schedule", {
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(validatedPayload),
        });

        return await response.json();
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Something went wrong",
        };
    }
}

/**
 * Get all schedules (with query)
 */
export async function getSchedules(queryString?: string) {
    try {
        const response = await serverFetch.get(
            `/schedule${queryString ? `?${queryString}` : ""}`
        );

        return await response.json();
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Something went wrong",
        };
    }
}

/**
 * Get single schedule by ID
 */



/**
 * Delete schedule (hard delete)
 */
export async function deleteSchedule(id: string) {
    try {
        const response = await serverFetch.delete(`/schedule/${id}`);
        return await response.json();
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Something went wrong",
        };
    }
}
