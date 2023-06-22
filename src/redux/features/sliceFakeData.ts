import { Task } from '../../types/taskcard'

export const fakeTasks: Task[] = [
    {
      id: 1,
      name: "Implement Login Page",
      sticker: "Authentication",
      priority: "medium",
      storyPoints: 7,
      createdDate: "12-06-2023",
      order: {
        column: 3,
        row: 1,
      },
      assigned: {
        id: 1,
        name: "John Doe",
      },
    },
    {
      id: 2,
      name: "Refactor Database Model",
      sticker: "Database",
      priority: "high",
      storyPoints: 3,
      createdDate: "02-06-2023",
      order: {
        column: 1,
        row: 2,
      },
      assigned: undefined,
    },
    {
      id: 3,
      name: "Design User Interface",
      sticker: "UI/UX",
      priority: "lowest",
      storyPoints: 9,
      createdDate: "19-06-2023",
      order: {
        column: 4,
        row: 1,
      },
      assigned: undefined,
    },
    {
      id: 4,
      name: "Implement Push Notifications",
      sticker: "Notifications",
      priority: "lowest",
      storyPoints: 1,
      createdDate: "05-06-2023",
      order: {
        column: 5,
        row: 2,
      },
      assigned: undefined,
    },
    {
      id: 5,
      name: "Add Data Analytics Dashboard",
      sticker: "Analytics",
      priority: "high",
      storyPoints: 6,
      createdDate: "24-06-2023",
      order: {
        column: 3,
        row: 2,
      },
      assigned: {
        id: 2,
        name: "Jane Smith",
      },
    },
    {
      id: 6,
      name: "Optimize Performance",
      sticker: "Performance",
      priority: "lowest",
      storyPoints: 2,
      createdDate: "08-06-2023",
      order: {
        column: 1,
        row: 1,
      },
      assigned: undefined,
    },
    {
      id: 7,
      name: "Implement Email Templates",
      sticker: "Email",
      priority: "medium",
      storyPoints: 8,
      createdDate: "18-06-2023",
      order: {
        column: 2,
        row: 1,
      },
      assigned: undefined,
    },
    {
      id: 8,
      name: "Setup Continuous Integration",
      sticker: "DevOps",
      priority: "highest",
      storyPoints: 5,
      createdDate: "15-06-2023",
      order: {
        column: 4,
        row: 2,
      },
      assigned: {
        id: 3,
        name: "Alice Johnson",
      },
    },
    {
      id: 9,
      name: "Create User Registration API",
      sticker: "Security",
      priority: "high",
      storyPoints: 4,
      createdDate: "09-06-2023",
      order: {
        column: 2,
        row: 2,
      },
      assigned: {
        id: 4,
        name: "Mark Thompson",
      },
    },
    {
      id: 10,
      name: "Fix Cross-Browser Compatibility Issues",
      sticker: "Frontend",
      priority: "medium",
      storyPoints: 7,
      createdDate: "14-06-2023",
      order: {
        column: 5,
        row: 1,
      },
      assigned: undefined,
    },
  ];
  