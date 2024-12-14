export const formatDate = (createdAt: string): string => {
  const createdDate: Date = new Date(createdAt);
  const now: Date = new Date();

  // 날짜 비교 함수
  const isSameDay = (date1: Date, date2: Date): boolean => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  if (isSameDay(createdDate, now)) {
    // 오늘인 경우 "오늘 HH:mm"
    const hours = String(createdDate.getHours()).padStart(2, '0');
    const minutes = String(createdDate.getMinutes()).padStart(2, '0');
    return `오늘 ${hours}:${minutes}`;
  } else {
    // 그 외의 경우 "yyyy-MM-dd"
    const year = createdDate.getFullYear();
    const month = String(createdDate.getMonth() + 1).padStart(2, '0');
    const day = String(createdDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
};
