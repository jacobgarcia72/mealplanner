'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export async function shareMeal(prevState, formData) {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
    }

    if (
        !meal.title.trim() ||
        !meal.summary.trim() ||
        !meal.instructions.trim() ||
        !meal.creator.trim() ||
        !meal.creator_email.trim() ||
        !meal.creator_email.includes('@') ||
        !meal.image ||
        meal.image.size === 0
    ) {
        return {
            message: 'Invalid input.'
        };
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
    // await saveMeal(meal);

    revalidatePath('/meals');
    redirect('/meals');
}
