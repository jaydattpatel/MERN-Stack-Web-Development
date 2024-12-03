import Applicants from "./applicants.js";

export default class Jobs {
  applicantList = [
    new Applicants(
      1,
      "Applicant",
      "app@job.com",
      "1234567890",
      "uploads/Dummy.pdf"
    ),
  ];

  constructor(
    id,
    category,
    designation,
    location,
    company,
    salary,
    applyby,
    skills,
    numberOfOpening,
    postedDate
  ) {
    this.id = id;
    this.category = category;
    this.designation = designation;
    this.location = location;
    this.company = company;
    this.salary = salary;
    this.applyby = applyby;
    if (Array.isArray(skills)) {
      this.skills = skills;
    } else {
      this.skills = [skills];
    }
    this.numberOfOpening = numberOfOpening;
    this.postedDate = postedDate;
  }

  static getById(id) {
    return list.find((job) => job.id == id);
  }

  static addApplicant(jobID, name, email, contact, resumePath) {
    const job = this.getById(jobID);
    job.applicantList.push(
      new Applicants(
        job.applicantList.length + 1,
        name,
        email,
        contact,
        resumePath
      )
    );
  }

  static addJob(
    category,
    designation,
    location,
    company,
    salary,
    applyby,
    skills,
    numberOfOpening,
    postedDate
  ) {
    list.push(
      new Jobs(
        list.length + 1,
        category,
        designation,
        location,
        company,
        salary,
        applyby,
        skills,
        numberOfOpening,
        postedDate
      )
    );
  }

  static update(
    id,
    category,
    designation,
    location,
    company,
    salary,
    applyby,
    skills,
    numberOfOpening,
    postedDate
  ) {
    const index = list.findIndex((job) => job.id == id);
    list[index] = new Jobs(
      id,
      category,
      designation,
      location,
      company,
      salary,
      applyby,
      skills,
      numberOfOpening,
      postedDate
    );
  }

  static delete(id) {
    const index = list.findIndex((job) => job.id == id);
    list.splice(index, 1);
  }

  static getAll() {
    return list;
  }

  static search(text) {
    const tx = text.toLowerCase();
    return list.filter((job) => {
      const data = (
        job.category +
        job.designation +
        job.company +
        job.location +
        job.skills.join(" ")
      ).toLowerCase();
      return data.includes(tx);
    });
  }
}

var list = [
  new Jobs(
    1,
    "Tech",
    "MERN Developer",
    "Delhi",
    "Amazon",
    "3,00,000",
    "2024-07-31",
    ["React", "NodeJs", "MongoDB", "Express"],
    5,
    "30/6/2024, 6:41:10 pm"
  ),
  new Jobs(
    2,
    "Tech",
    "JAVA Developer",
    "Mumbai",
    "Wipro",
    "4,00,000",
    "2024-08-10",
    ["Java", "Data Structures & Algo"],
    3,
    "30/6/2024, 6:41:50 pm"
  ),
  new Jobs(
    3,
    "Tech",
    "DevOps",
    "Chennai",
    "Infosys",
    "3,50,000",
    "2024-09-07",
    ["C++", "Data Structures & Algo"],
    2,
    "30/6/2024, 6:43:57 pm"
  ),
];
