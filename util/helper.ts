export const chunkArray = <T>(array: T[], chunkSize: number) => {
  const results = [];
  const newArray = [...array];

  while (newArray.length) {
    results.push(newArray.splice(0, chunkSize));
  }

  return results;
};

export const categoriesTranslateMap = {
  company: "公司實習",
  personalization: "個人指導",
  interview: "職涯訪談",
};
