export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright Pixell River Financial © {year}</p>
    </footer>
  );
}
