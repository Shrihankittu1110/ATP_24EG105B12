// 1. Validate title
export function validateTitle(title) {
  if (title === "" || title.length < 3) {
    return false;
  }
  return true;
}

// 2. Validate priority
export function validatePriority(priority) {
  if (priority === "low" || priority === "medium" || priority === "high") {
    return true;
  }
  return false;
}

// 3. Validate due date (must be future)
export function validateDueDate(date) {
  let today = new Date();
  let inputDate = new Date(date);

  if (inputDate > today) {
    return true;
  }
  return false;
}