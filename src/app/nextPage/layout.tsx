 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <>
        
        <h1>nextPageInnerLayout</h1>
        {children}
      
     </>
  );
}
