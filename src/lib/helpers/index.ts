export const combineServiceData = (contentArray: any[], imageArray: any[]) => {
  const normalize = (str: string) => str.toLowerCase().replace(/s$/, '');
  return contentArray.map((c, i) => {
    const titleWords = c.title.toLowerCase().split(' ').map(normalize);
    let bestMatch = { img: imageArray[i] || {}, count: 0 };
    for (const img of imageArray) {
      const imgTags = img.tags?.map(normalize) || [];
      let matchCount = 0;
      for (const word of titleWords) {
        if (imgTags.some((tag: string) => tag.includes(word) || word.includes(tag))) matchCount++;
      }
      if (matchCount > bestMatch.count) bestMatch = { img, count: matchCount };
    }
    return { ...c, ...bestMatch.img };
  });
};
