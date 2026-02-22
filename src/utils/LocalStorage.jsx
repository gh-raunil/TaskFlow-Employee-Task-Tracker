// utils/LocalStorage.js

const employees = [
  {
    id: 1,
    firstname: "Rahul",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        title: "Prepare sales report",
        description: "Create monthly sales performance report",
        date: "2025-01-10",
        category: "Sales",
        status: "new",
      },
      {
        title: "Client follow-up",
        description: "Follow up with potential clients",
        date: "2025-01-12",
        category: "Communication",
        status: "active",
      },
      {
        title: "Update CRM",
        description: "Update customer records in CRM",
        date: "2025-01-15",
        category: "Admin",
        status: "completed",
      },
      {
        title: "Cold calling campaign",
        description: "Call 20 new leads",
        date: "2025-01-18",
        category: "Sales",
        status: "failed",
      },
    ],
  },

  {
    id: 2,
    firstname: "Amit",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Design landing page",
        description: "Create UI for new landing page",
        date: "2025-01-08",
        category: "Design",
        status: "new",
      },
      {
        title: "Fix UI bugs",
        description: "Resolve reported UI issues",
        date: "2025-01-11",
        category: "Development",
        status: "active",
      },
      {
        title: "Optimize images",
        description: "Compress images for faster load",
        date: "2025-01-14",
        category: "Performance",
        status: "completed",
      },
    ],
  },

  {
    id: 3,
    firstname: "Suresh",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Write API documentation",
        description: "Document all REST endpoints",
        date: "2025-01-09",
        category: "Documentation",
        status: "new",
      },
      {
        title: "Code review",
        description: "Review pull requests",
        date: "2025-01-11",
        category: "Development",
        status: "completed",
      },
      {
        title: "Refactor auth module",
        description: "Improve authentication logic",
        date: "2025-01-16",
        category: "Backend",
        status: "failed",
      },
    ],
  },

  {
    id: 4,
    firstname: "Priya",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Test payment gateway",
        description: "Perform QA testing for payments",
        date: "2025-01-07",
        category: "Testing",
        status: "active",
      },
      {
        title: "Bug reporting",
        description: "Report critical bugs",
        date: "2025-01-10",
        category: "QA",
        status: "completed",
      },
      {
        title: "Regression testing",
        description: "Run regression test suite",
        date: "2025-01-13",
        category: "Testing",
        status: "failed",
      },
    ],
  },

  {
    id: 5,
    firstname: "Neha",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Content writing",
        description: "Write blog post for product launch",
        date: "2025-01-06",
        category: "Marketing",
        status: "new",
      },
      {
        title: "SEO optimization",
        description: "Optimize blog for SEO",
        date: "2025-01-09",
        category: "Marketing",
        status: "completed",
      },
      {
        title: "Social media scheduling",
        description: "Schedule posts for the week",
        date: "2025-01-12",
        category: "Social Media",
        status: "failed",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    firstname: "Rounak",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
