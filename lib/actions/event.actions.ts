'use server';

import Event from "@/database/event.model";
import connectDB from "../mongodb";

export const getSimilarEventsBySlug = async (slug: string) => {
    try {
        await connectDB();
// Find the event with the given slug
        const event = await Event.findOne({ slug });// If the event is not found, return an empty array
        if (!event) return [];
// Find events that are not the current event but share at least one tag
        return await Event.find({_id: { $ne: event._id }, tags: { $in: event.tags } }).lean(); // Use .lean() to get plain JavaScript objects instead of Mongoose documents 

    } catch (error) {
        return []
    }
}