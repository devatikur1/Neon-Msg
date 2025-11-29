export default function GenUsername(name = "") {
  const num = Math.floor(Math.random() * 1000);
  const str = Math.random().toString(36).substring(2, 7); // 5-letter random string
  return name ? name.replace(/\s+/g, "").toLowerCase() + str + num : str + num;
}
