import { db } from "../config/db.js";
const table = () => db("sl_faqs");
export const Faq = {
  getAllFaqs: async () => {
    return await db
      .select(
        "faq_id",
        "question",
        "answer",
        "is_shown",
        "sl_faqs.created_at",
        db.raw(
          "CONCAT(sl_user_accounts.first_name, ' ', LEFT(sl_user_accounts.middle_name, 1), '. ', sl_user_accounts.last_name) AS createdBy"
        )
      )
      .from("sl_faqs")
      .innerJoin("sl_user_accounts", {
        "sl_faqs.created_by": "sl_user_accounts.user_id",
      })
      .orderBy("created_at", "desc"); 
  },  insertFaq: async (newFaq) => {
    return await table().insert(newFaq);
  },
  updateFaq: async (faq_id, updatedFaq) => {
    return await table().where({ faq_id }).update(updatedFaq);
  },deleteFaq: async (faq_id) => {
    return await table().where({ faq_id }).del();
  },
};
