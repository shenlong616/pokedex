export default function (parameter1, parameter2) {
  return `${parameter1}/${parameter2} (${Math.round(
    (parameter1 / parameter2) * 100
  )}%)`;
}
