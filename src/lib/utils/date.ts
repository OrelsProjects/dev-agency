function yearsSince(date: Date): number {
  return new Date().getFullYear() - date.getFullYear();
}

export const experienceYears = yearsSince(new Date("2016-10-19"));
