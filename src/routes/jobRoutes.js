import express from "express";
import {
  deleteJob,
  getJobDetails,
  getJobs,
  getFilteredAllJobsByIndustry,
  getOpenJobs,
  getFilteredOpenJobs,
  insertJob,
  searchJob,
  updateJob,
  getJobAssessmentUrl,
  getOpenJobsCount,
  getClosedJobsCount,
  getJobsAdminFilteredByStatus,
} from "../controllers/jobController.js";

const router = express.Router();

router.get("/all-jobs", getJobs);

router.get("/all-jobs/:industry_id", getFilteredAllJobsByIndustry);

router.get("/all-open-jobs", getOpenJobs);

router.get("/all-open-jobs/:industry_id", getFilteredOpenJobs);

router.get("/get-open-jobs-count", getOpenJobsCount);

router.get("/get-closed-jobs-count", getClosedJobsCount);

router.get("/get-job-details/:id", getJobDetails);

router.post("/get-job-assessment-url/", getJobAssessmentUrl);

router.get("/get-jobs-filtered-by-status/:is_open", getJobsAdminFilteredByStatus);

router.post("/add-job", insertJob);

router.post("/edit-job", updateJob);

router.post("/delete-job", deleteJob);

router.get("/search-job/:search_val", searchJob);

export default router;
