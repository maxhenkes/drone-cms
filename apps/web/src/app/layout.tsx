export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
         <div style={{ padding: "0 2rem" }}>{children}</div>
      </body>
    </html>
  );
}
