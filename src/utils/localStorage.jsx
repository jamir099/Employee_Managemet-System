// localStorage.clear()

const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "firstname": "Amit",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "failed": false,
        "completed": true,
        "task_title": "Complete Monthly Report",
        "task_description": "Prepare and submit the monthly sales report.",
        "task_date": "2024-11-10",
        "category": "Reporting"
      },
      {
        "active": false,
        "new_task": false,
        "failed": true,
        "completed": false,
        "task_title": "Client Meeting",
        "task_description": "Attend the scheduled meeting with the client.",
        "task_date": "2024-11-05",
        "category": "Meeting"
      },
      {
        "active": true,
        "new_task": true,
        "failed": false,
        "completed": true,
        "task_title": "Product Testing",
        "task_description": "Test the new product features and log feedback.",
        "task_date": "2024-11-12",
        "category": "Testing"
      }
    ],
    "task_count": {
      "active": 2,
      "new_task": 2,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "firstname": "Ravi",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "failed": false,
        "completed": false,
        "task_title": "Fix Bugs in Software",
        "task_description": "Resolve critical bugs reported in the latest version.",
        "task_date": "2024-11-08",
        "category": "Development"
      },
      {
        "active": false,
        "new_task": false,
        "failed": true,
        "completed": true,
        "task_title": "Write Documentation",
        "task_description": "Document the latest software update.",
        "task_date": "2024-10-25",
        "category": "Documentation"
      },
      {
        "active": true,
        "new_task": false,
        "failed": false,
        "completed": false,
        "task_title": "Code Review",
        "task_description": "Review code submitted by junior developers.",
        "task_date": "2024-11-14",
        "category": "Review"
      }
    ],
    "task_count": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "firstname": "Priya",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "failed": false,
        "completed": true,
        "task_title": "Update Website Content",
        "task_description": "Update the website content based on the new marketing strategy.",
        "task_date": "2024-11-10",
        "category": "Content"
      },
      {
        "active": true,
        "new_task": false,
        "failed": false,
        "completed": false,
        "task_title": "SEO Optimization",
        "task_description": "Optimize the website for better search engine ranking.",
        "task_date": "2024-11-12",
        "category": "Marketing"
      },
      {
        "active": false,
        "new_task": false,
        "failed": true,
        "completed": true,
        "task_title": "Create Social Media Campaign",
        "task_description": "Design and implement a new social media campaign for the product.",
        "task_date": "2024-10-30",
        "category": "Marketing"
      }
    ],
    "task_count": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "firstname": "Suresh",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "failed": false,
        "completed": true,
        "task_title": "Setup Network Infrastructure",
        "task_description": "Configure and deploy network for the new office.",
        "task_date": "2024-11-15",
        "category": "IT"
      },
      {
        "active": false,
        "new_task": false,
        "failed": false,
        "completed": false,
        "task_title": "Maintain Servers",
        "task_description": "Perform routine maintenance and updates on servers.",
        "task_date": "2024-11-01",
        "category": "IT"
      },
      {
        "active": true,
        "new_task": false,
        "failed": false,
        "completed": true,
        "task_title": "Install Security Systems",
        "task_description": "Install and test security systems in the new office building.",
        "task_date": "2024-11-10",
        "category": "Security"
      }
    ],
    "task_count": {
      "active": 2,
      "new_task": 1,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "firstname": "Neha",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "failed": false,
        "completed": false,
        "task_title": "Prepare Presentation for Client",
        "task_description": "Create a PowerPoint presentation for the client meeting.",
        "task_date": "2024-11-09",
        "category": "Presentations"
      },
      {
        "active": true,
        "new_task": false,
        "failed": false,
        "completed": true,
        "task_title": "Team Meeting",
        "task_description": "Organize and attend a meeting with the internal team.",
        "task_date": "2024-11-11",
        "category": "Meeting"
      },
      {
        "active": true,
        "new_task": true,
        "failed": false,
        "completed": true,
        "task_title": "Market Research",
        "task_description": "Conduct market research for the new product launch.",
        "task_date": "2024-11-14",
        "category": "Research"
      }
    ],
    "task_count": {
      "active": 3,
      "new_task": 2,
      "completed": 1,
      "failed": 0
    }
  }
];

  
  const admin = [
    {
      "id": 1,
      "firstname": "Admin",
      "email": "admin@example.com",
      "password": "123"
    }
  ];

export const setLocalStorage = ()=> {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = ()=> {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

   return{employees,admin}
    
    
}