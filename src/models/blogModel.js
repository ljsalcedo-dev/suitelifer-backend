import { db } from "../config/db.js";
import { v7 as uuidv7 } from "uuid";

const tableEmployee = "sl_employee_blogs";
const tableEmployeeImages = "sl_employee_blog_images";

const tableCompany = "sl_company_blogs";
const tableCompanyImages = "sl_company_blog_images";

export const Blogs = {
  // Employee
  getAllEmployeeBlogs: async () => {
    return await db(tableEmployee)
      .leftJoin(
        tableEmployeeImages,
        `${tableEmployee}.eblog_id`,
        `${tableEmployeeImages}.eblog_id`
      )
      .select(
        `${tableEmployee}.*`,
        db.raw(`JSON_ARRAYAGG(${tableEmployeeImages}.image_url) AS images`)
      )
      .groupBy(`${tableEmployee}.eblog_id`);
  },

  addEmployeeBlog: async (blog) => {
    return await db(tableEmployee).insert(blog);
  },

  // Company
  getAllCompanyBlogs: async () => {
    return await db(tableCompany)
      .leftJoin(
        tableCompanyImages,
        `${tableCompany}.cblog_id`,
        `${tableCompanyImages}.cblog_id`
      )
      .select(
        `${tableCompany}.*`,
        db.raw(`JSON_ARRAYAGG(${tableCompanyImages}.image_url) AS images`)
      )
      .groupBy(`${tableCompany}.cblog_id`);
  },

  addCompanyBlog: async (data) => {
    const cblog_id = uuidv7();

    await db(tableCompany).insert({
      cblog_id,
      title: data.title,
      description: data.description,
      created_at: db.fn.now(),
      created_by: data.userId,
      updated_by: data.userId,
      updated_at: db.fn.now(),
    });
    return cblog_id;
  },
};
