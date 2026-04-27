import { Notification } from "@/types";

type SectionName = "Today" | "Yesterday" | "Earlier" | "Older";
type Sections = Record<SectionName, Notification[]>;

export const groupNotifications = (data: Notification[]) => {
  const sections: Sections = {
    Today: [],
    Yesterday: [],
    Earlier: [],
    Older: []
  };

  const now = new Date();

  data.forEach(item => {
    const date = new Date(item.createdAt);
    const now = new Date();

    const diffDays = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (diffDays === 0) {
      sections.Today.push(item);
    } else if (diffDays === 1) {
      sections.Yesterday.push(item);
    } else if (diffDays <= 7) {
      sections.Earlier.push(item);
    } else {
      sections.Older.push(item);
    }
  });

  const sectionOrder: SectionName[] = [
    "Today",
    "Yesterday",
    "Earlier",
    "Older"
  ];

  return sectionOrder
    .map(title => ({
      title,
      data: sections[title]
    }))
    .filter(section => section.data.length > 0);
};
