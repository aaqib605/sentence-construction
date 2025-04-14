export const getFeedbackMessage = (percentage: number): string => {
  if (percentage >= 80) {
    return "While you correctly formed several sentences, there are a couple of areas where improvement is needed. Pay close attention to sentence structure and word placement to ensure clarity and correctness. Review your responses below for more details.";
  }
  if (percentage >= 50) {
    return "You've demonstrated a good understanding of sentence construction, but there's room for improvement. Focus on word order and sentence flow to enhance your writing. Practice with more examples to strengthen your skills.";
  }
  return "You're making progress with sentence construction, but more practice is needed. Pay attention to the correct order of words and how they relate to each other. Consider reviewing basic sentence structure rules and try again.";
};
