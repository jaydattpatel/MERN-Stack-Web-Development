
import Jobs from "../models/jobs.js";
import Users from "../models/users.js";

export default class controller {

    getHome(req,res){
        
        if(req.session.userEmail) {
            const jobs = Jobs.getAll();
            res.render('jobs',{jobs:jobs,userName:req.session.userName,userEmail:req.session.userEmail});
        }else{
            res.render('index',{userName:req.session.userName,userEmail:req.session.userEmail});
        }
    }

    getJobs(req,res){
        const jobs = Jobs.getAll();
        res.render('jobs',{jobs:jobs,userName:req.session.userName,userEmail:req.session.userEmail});
    }

    getJobInfo(req,res){
        const job = Jobs.getById(req.params.id);
        res.render('jobInfo', {job:job,userName:req.session.userName,userEmail:req.session.userEmail});
    }

    getJobDelete(req,res){
        Jobs.delete(req.params.id);
        const jobs = Jobs.getAll();
        res.render('jobs',{jobs:jobs,userName:req.session.userName,userEmail:req.session.userEmail});
    }

    getJobApplicants(req,res){
        const job = Jobs.getById(req.params.id);
        res.render('applicants', {applicants : job.applicantList,userName:req.session.userName,userEmail:req.session.userEmail});
    }

    postAddApplicant(req,res){
        const {name, email, contact } = req.body;
        const resumePath = 'uploads/' + req.file.filename;
        Jobs.addApplicant(req.params.id,name,email,contact,resumePath);
        const jobs = Jobs.getAll();
        res.render('jobs',{jobs:jobs,userName:req.session.userName,userEmail:req.session.userEmail});
    }

    getPostJob(req,res){
        res.render('postjob',{userName:req.session.userName,userEmail:req.session.userEmail});
    }

    postPostJob(req,res){
        // console.log(req.body);
        const {job_category,job_designation,job_location,company_name,salary,apply_by,skills_required,number_of_openings} = req.body;

        const postedDate = new Date().toLocaleString();

        Jobs.addJob(job_category,job_designation,job_location,company_name,salary,apply_by,skills_required,number_of_openings, postedDate);

        const jobs = Jobs.getAll();
        // console.log(jobs);
        res.render('jobs',{jobs:jobs,userName:req.session.userName,userEmail:req.session.userEmail});

    }

    getJobUpdate(req,res){
        const job = Jobs.getById(req.params.id);
        res.render('update-job',{job:job,userName:req.session.userName,userEmail:req.session.userEmail})
    }

    postJobUpdate(req,res){
        const {job_category,job_designation,job_location,company_name,salary,apply_by,skills_required,number_of_openings} = req.body;

        const postedDate = new Date().toLocaleString();
        Jobs.update(req.params.id,job_category,job_designation,job_location,company_name,salary,apply_by,skills_required,number_of_openings, postedDate);

        const job = Jobs.getById(req.params.id);
        res.render('jobInfo', {job:job,userName:req.session.userName,userEmail:req.session.userEmail});
    }

    postSearch(req,res){
        const jobs = Jobs.search(req.body.search);
        res.render('jobs',{jobs:jobs,userName:req.session.userName,userEmail:req.session.userEmail});
    }

} 


