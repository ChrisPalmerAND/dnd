import { WorkSourceNames } from "../components/workSourceNames.js";
import { ClientStatusType } from "../components/ClientStatusType.js";

export const andis = [
  {
    name: "Chris",
    profile: {
      level: 2.2,
      role: "Developer",
      skills: ["python", "react"],
    },
    id: 1,
    currentProject: 1,
    client: {
      startDate: "05/05/2023",
      endDate: "05/10/2023",
      status: ClientStatusType.TIPPED,
      name: WorkSourceNames.MM,
      id: 4,
      role: "Developer",
      skills: ["python"],
    },
  },
  {
    name: "Dom",
    id: 2,
    currentProject: 3,
    profile: {
      level: 3.1,
      role: "Developer",
      skills: ["java", "react"],
    },
    client: {
      startDate: "10/10/2010",
      endDate: "05/12/2023",
      status: ClientStatusType.CONFIRMED,
      name: WorkSourceNames.SKY,
      id: 3,
      role: "Developer",
      skills: ["java"],
    },
  },
  {
    name: "KZ",
    id: 3,
    currentProject: 2,
    profile: {
      level: 2.2,
      role: "Developer",
      skills: ["java", "react"],
    },
    client: {
      startDate: "03/05/2023",
      endDate: "10/05/2023",
      status: ClientStatusType.ROLLING_OFF,
      name: WorkSourceNames.TCO,
      id: 2,
      role: "Developer",
      skills: ["react"],
    },
  },
  {
    name: "Iain",
    id: 4,
    currentProject: 1,
    profile: {
      level: 5.2,
      role: "Developer",
      skills: ["java", "react"],
    },
    client: {
      startDate: null,
      startDate: null,
      status: null,
      name: null,
      id: null,
      role: null,
      skills: null,
    },
  },
];
