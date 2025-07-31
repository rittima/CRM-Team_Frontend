import p1 from "./assets/p3.jpg"
import p2 from "./assets/p2.jpg"

const employees = [
  {
    id: "EMP001",
    name: "Ravi Kumar",
    image: p1,
    email: "rk@gmail.com",
    phone: "+91-9876543210",
    designation: "Frontend Developer",
    department: "Engineering",
    projectId:"PRJ001",
    project: "CRM Redesign",
    status: "Active",
    joiningDate: "2022-04-15"
  },
  {
    id: "EMP002",
    name: "Anjali Mehta",
    image: p2,
    email: "am@gmail.com",
    phone: "+91-9876501234",
    designation: "Backend Developer",
    department: "Engineering",
    projectId:"PRJ005",
    project: "Recruitment System",
    status: "Active",
    joiningDate: "2021-12-01"
  }
];
export default employees;


export const projects = [
  {
    "projectId": "PRJ001",
    "title": "CRM Redesign",
    "description": "Redesign the customer relationship management system UI/UX and backend API integrations.",
    "manager": "Nikita Sharma",
    "email": "nikita.sharma@crmteam.com",
    "Skill": "ReactJS, Figma, Spring Boot, REST APIs",
    "tool": "Jira, Postman, GitHub, Figma",
    "status": "Ongoing"
  },
  {
    "projectId": "PRJ002",
    "title": "Inventory Tracker",
    "description": "A full-stack system to manage warehouse inventories with QR scanning and alerts.",
    "manager": "Ravi Kumar",
    "email": "ravi.kumar@crmteam.com",
    "Skill": "Java, Angular, MongoDB, QR SDK",
    "tool": "IntelliJ, Jenkins, GitLab, Firebase",
    "status": "Completed"
  },
  {
    "projectId": "PRJ003",
    "title": "Employee Portal",
    "description": "Build a role-based employee self-service portal for HR-related actions.",
    "manager": "Anjali Mehta",
    "email": "anjali.mehta@crmteam.com",
    "Skill": "ReactJS, Node.js, Express, JWT Auth",
    "tool": "VS Code, Postman, GitHub Actions, MongoDB Compass",
    "status": "Ongoing"
  },
  {
    "projectId": "PRJ004",
    "title": "E-Commerce Analytics",
    "description": "Analytics dashboard for tracking product performance and user trends.",
    "manager": "Arjun Patel",
    "email": "arjun.patel@crmteam.com",
    "Skill": "Python, Pandas, D3.js, ReactJS",
    "tool": "Tableau, Jupyter, VS Code, Git",
    "status": "Pending"
  },
  {
    "projectId": "PRJ005",
    "title": "Recruitment System",
    "description": "Automated recruitment pipeline management with resume parsing and scheduling.",
    "manager": "Divya Singh",
    "email": "divya.singh@crmteam.com",
    "Skill": "Node.js, Express, NLP, ReactJS",
    "tool": "Nodemailer, GitHub, Docker, VS Code",
    "status": "Ongoing"
  }
]

export const faqs = [
  {
    question: 'How do I raise a ticket?',
    answer: 'Click on the "Raise a Ticket" button and fill out the form with all necessary details about the issue.'
  },
  {
    question: 'How long does support take to respond?',
    answer: 'Our support team typically responds within 24-48 hours during business days.'
  },
  {
    question: 'Where can I track my ticket status?',
    answer: 'After submitting, you’ll receive a ticket ID. You can track it under the "My Tickets" section.'
  }
];